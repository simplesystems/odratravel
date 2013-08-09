<?php


// ep3gate v0.103
// requires : curl , iconv or mbstring (for charsets other than UTF8)


class ep3gate {
  private $GET;
  private $POST;
  private $agentnr;
  private $affiliate;
  private $characterset;
  private $recvparts;
  private $searchtype;
  private $cnv;
  private $scriptbase;
  private $specialsearchtype;

  const ibeurl="http://ibe01.merlinx.pl/easypax3/agent/";
  
  public function __construct($agentnr,$affiliate,$varname='ep3',$characterset='UTF-8',$encby='mb')
  {
    $this->searchtype='';
    $this->agentnr=$agentnr;
    $this->affiliate=$affiliate;
    $this->varname=$varname;
    $this->GET=$_GET;
    $this->POST=$_POST;
    $this->recvparts=array();
    $this->scriptbase=(($p=strpos($u=$_SERVER["REQUEST_URI"],'?'))!==false)?substr($u,0,$p):$u;   
    $this->characterset=($characterset=='UTF-8'?false:$characterset);
    if ($this->characterset!==false)
      $this->cnv=$encby;
    else
      $this->cnv='none';
    unset($_GET[$varname]);
    /*
    if (isset($this->GET[$varname]) && strpos(implode('',$this->GET[$varname]),'action=validate')!==false)
    {
      ob_end_clean();
      $this->printContents();
      die();
    }
    */
  }
  
  public function addToGET($name,$value)
  {
    $this->GET[$name] = $value;
  }
  public function getFromGET($name)
  {
    return $this->GET[$name];
  }
  
  public function setTargetURL($url)
  {
    $this->scriptbase=$url;
  }
  
  private function encfromIBE($data)
  {
    if ($this->cnv=='mb')
      return mb_convert_encoding($data,$this->characterset,'UTF-8');
    elseif ($this->cnv=='iconv')
      return iconv('UTF-8',$this->characterset.'//TRANSLIT//IGNORE',$data);  
    else
      return $data;    
   }
   
  private function enctoIBE($data)
  {
    if ($this->cnv=='mb')
      return mb_convert_encoding($data,'UTF-8',$this->characterset);    
    elseif ($this->cnv=='iconv')
      return iconv($this->characterset,'UTF-8',$data);
    else
      return $data;        
  }

  public function fetch($params,$adtparams='')
  {
    $cont=$this->sendrecvdata(null,1,'&gateparts='.implode(',',$params).'&'.$adtparams);
    $pos=30;
    $len=strlen($cont);
    $plen=0;
    while ($pos<$len)
    {
      $this->recvparts[trim(substr($cont,$pos-20,20))]=($this->characterset!==false)?$this->encfromIBE(substr($cont,$pos,$plen=((int)substr($cont,$pos-30,10)))):substr($cont,$pos,$plen=((int)substr($cont,$pos-30,10)));
      $pos+=$plen+30;
      if ($plen<=0) return false;
    }
  }
  
  public function getPart($name)
  {
    if (isset($this->recvparts[$name]))
      return $this->recvparts[$name];
    else
      return false;
  }
  
  public function getStep($force = false)
  {
    if($force)
      return max(1,intval($this->recvparts['step']));
    
    if (isset($this->recvparts['step']))
      return (int)$this->recvparts['step'];
    else
      return false;
  }
  
  public function getSearchType()
  {
    if (isset($this->recvparts['step']))
      return $this->recvparts['step'];
    else
      return false;
  }  
  
  public function getContents($url=null,$adtparams='')
  {
    if ($this->characterset!==false)    
      return $this->encfromIBE($this->sendrecvdata($url,1,$adtparams));
    else  
      return $this->sendrecvdata($url,1,$adtparams);
  }
  
  public function printContents($url=null,$adtparams='')
  {
    if ($this->characterset!==false)    
    {
      echo $this->encfromIBE($this->sendrecvdata($url,1,$adtparams));
      return true;
    }
    else      
      return $this->sendrecvdata($url,0);
  }
  
  public function setSearchType($p)
  {
    switch ($p)
    {
      case 'PA':
          $this->searchtype='/pa';
        break;
      case 'NF':
          $this->searchtype='/nf';
        break;
      case 'NH':
          $this->searchtype='/nh';
        break;
      case 'RR':
          $this->searchtype='/rr';
        break;
      case 'CR':
          $this->searchtype='/cr';
        break;
      default:
          $this->searchtype='';
          break;
    }
  }

  public function setSpecialSearchType($p)
  {
    if (empty($p))
      $this->specialsearchtype='';
    else
      $this->specialsearchtype='/'.strtolower($p);
  }
  
  private function sendrecvdata($url=null,$rettrans=1,$adtparams='')
  {
    $ch=curl_init();    
    if ($url==null)
      $vals=$this->GET[$this->varname];
    else
      $vals=array($url);
    $GET=$_GET;
    unset($GET[$this->varname]);
    $vals=(!empty($vals)?implode('&',$vals):'?');
    if ($this->characterset!==false)
      $vals=$this->enctoIBE($vals);
         
    if(empty($GET))
      $GET = Array();
    
    curl_setopt($ch, CURLOPT_URL, $url=self::ibeurl.$this->agentnr."/".$this->affiliate
          .$this->searchtype.$this->specialsearchtype."/".$vals.$adtparams."&gate=".$this->varname
          ."&sbase=".urlencode($this->scriptbase)
          .'&mainparams='.urlencode(http_build_query($GET))
          .'&rnd='.time().rand());
    
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip');    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, $rettrans);
    
    if (!empty($this->POST))
    {
      curl_setopt($ch, CURLOPT_POST, true);
      if ($this->characterset!==false)
        $POST=$this->encurl($this->POST);
      else  
        $POST=$this->POST;
      curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($POST));
    }
    $data=curl_exec($ch);
    curl_close($ch);
    return $data;
  }

  private function encurl($data)
  {
    if (is_array($data))
    {
      foreach ($data as $key=>$rec)
         $data[$key]=$this->encurl($rec);
      return $data;   
    }
    else
      return $this->enctoIBE($data);
  }
  
  
  
  
  /**
    * @author: Wojciech Bajon
    *
    * Parser for `devel.csv` and light template. 
    *
    */
  
  
  public $data = Array();
  private $pDInfo = Array();
  public function parseCVSContents($onlyContent = false)
  {
    return $this->parseCSVContents($onlyContent);
  }
  
  public function parseCSVContents($onlyContent = false)
  {
    ///test if is step 6 or next
    parse_str(join('&',$this->GET[$this->varname]),$this->pDInfo['input']);
    
    if(is_array($this->pDInfo['input']))
    {
      if($this->pDInfo['input']['action'] == 'validate')
        $this->pDInfo['isPlain'] = true;
      else if($this->__testPlain($this->pDInfo['input']['sp']))
      {
        $this->pDInfo['isPlain'] = false;
        //$this->affiliate=$affiliate;
        return true;
      }
      else
        $this->pDInfo['isPlain'] = true;
    }
    else
      $this->pDInfo['isPlain'] = true;
    
      
      
    if (isset($this->GET[$this->varname]) && strpos(implode('',$this->GET[$this->varname]),'action=validate')!==false)
    {
      $_tmp = $this->getContents('&ep3_plaindata=2');
    } 
    else if(!$onlyContent)
    {
      $this->fetch(array('searchform','headerjs','content'),'&ep3_plaindata=2');
      $_tmp=$this->getPart('headerjs').$this->getPart('content').$this->getPart('searchform');
    }
    else
    {
      $this->fetch(array('content', 'headerjs'),'&ep3_plaindata=2');
      $_tmp= $this->getPart('headerjs').$this->getPart('content');
    } 
      
    /// check if I have valid response
    if(strpos($_tmp,'MI@') === false && strpos($_tmp,'V@') === false)
    {
      $this->pDInfo['isValid'] = false;
      //$this->affiliate=$alliflate;
      return null;
    }
    else
      $this->pDInfo['isValid'] = true;
    
    /// make links to description to another template
    /*
    if($affiliate != '')
    {
      $_tmp = str_replace('/'.$this->agentnr.'/'.$this->affiliate.'/',
                          '/'.$this->agentnr.'/'.$affiliate.'/',
                          $_tmp);
    }
      */
      
    $data = explode("\n",$_tmp);
    //print_r($data);
    $idx = 'ignore';
    $isSUB == null;
    $_k = Array();
    for($i=0, $l=count($data); $i<$l; $i++)
    {
      $data[$i] = trim($data[$i]);
      if($data[$i] == '')
        continue;
      
      /// na koncu pliku przychodza javascripty
      if($idx == 'JS')
      {
        $this->data['JS'] .=$data[$i]."\n";
        continue;
      }
      
      $_r = explode('@', trim($data[$i]));
      
      $_idx = array_shift($_r);
      
      if($_idx != '')
      {
        /// wiersz naglowka
        $idx = $_idx;
        if($_r[0] == 'SUB')
          $isSUB = 1;
        else
          $isSUB = null;
        $_k = $_r;
      }
      else
      {
        if(isset($this->data['SF'][$idx]))
        {
          if($isSUB == null || $_r[0] == '0'){
            $this->data['SF'][$idx]['SUB'][] = array_combine($_k, $_r);
          }else{
            $this->data['SF'][$idx]['SUB'][count($this->data[$idx])-1]['SUB']=array_combine($_k,$_r);
          }
        }
        else
        {
          if($isSUB == null || $_r[0] == '0'){
            $this->data[$idx][] = array_combine($_k, $_r);
          }
          else 
          {
            $this->__parseBodySub($idx,$_r,$_k);
          }                       
        } 
        if($idx == 'SF')
        {
          $num = count($this->data[$idx][0])-1;
          foreach($this->data[$idx][0] AS $K1 => $V1)
            $this->data[$idx][$K1]['value'] = $V1;
          unset($this->data[$idx][0]);
        }
      }
    }
    if(!empty($this->data['MI'][0]))$this->data['MI'] = $this->data['MI'][0];
    if(!empty($this->data['UV'][0]))$this->data['UV'] = $this->data['UV'][0];
    if(!empty($this->data['PG'][0]))$this->data['PG'] = $this->data['PG'][0];
    
    return true;
  }
  
  protected function __parseBodySub($idx,$_r,$_k)
  {
    if(!is_array($this->data[$idx][count($this->data[$idx])-1]['SUB']))
      $this->data[$idx][count($this->data[$idx])-1]['SUB'] = Array();
    $this->data[$idx][count($this->data[$idx])-1]['SUB'][]=array_combine($_k,$_r);
  }
  
  protected function __testPlain($sp)
  {
    return $sp >=6;
  }
  public function plainIsValid()
  {
    return $this->pDInfo['isValid'];
  }
  public function plainIsValidate()
  {
    if(is_array($this->pDInfo['input']) && $this->pDInfo['input']['action'] == 'validate')
      return true;
    return false;
  }
  public function plainIsHTML()
  {
    return !$this->pDInfo['isPlain'];
  }
  
  public function getPlainData($deeplink='', $onlyContent = true, $tplversion = 2)
  {
    if(is_array($deeplink))
      $deeplink = http_build_query($deeplink);
    $deeplink .= '&ep3_plaindata='.max(intval($tplversion),1);
    $oEP3 = $_GET[$this->varname];
    $_GET[$this->varname][] = $deeplink{0}!='?'?'?'.$deeplink:$deeplink;
    $x = new ep3gate($this->agentnr,$this->affiliate,$this->varname,
      $this->characterset,$this->cnv);
    if(!$x->parseCSVContents($onlyContent))
    {
      $_GET[$this->varname] = $oEP3;
      return null;
    }
    $_GET[$this->varname] = $oEP3;
    return $x->data;
  }
  public function getOldPlainData($deeplink, $onlyContent = true, $tplversion = 1)
  {
    return $this->getPlainData($deeplink, $onlyContent, $tplversion);
  }
}



if(isset($_GET['easypaxversion']))
{
  ?><pre>
  /**
    * @version: $Id: ep3gate.class.php 1965 2010-06-02 10:47:35Z zbyszekb $
    * @version: PHP 5
    */
  </pre><?php
}

?>
