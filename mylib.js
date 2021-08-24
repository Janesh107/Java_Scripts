function match_pass(ele1,ele2,msg)//password and confirm password
{
  if(ele.value!=ele2.value)
  {
    alert(msg);
    return false;
  }
  else
  {
      return true;
  }
}

function is Numeric(ele, msg) //only Numeric
{
  var sText=ele.value;
  var f=true;
  var ch;

  for(i=0;i<sText.length &&f==true;i++)
  {
    ch=sText.charAt(i);
    if(!(ch>='0' && ch<='9'))
    {
      f= false;
    }
  }
  if(f==false)
  {
    alert(msg);
  }
  return f;
}
function IsAlpha(ele, msg)//only alphabets
{
  var sText=ele.value;

  var flag=true;
  var ch;

  for(i=o; i < sText.length && flag == true; i++)
  {
    ch=sText.charAt(i);
    if(!(ch>='a' && ch<='z' || ch>='A' && ch<='Z' || ch==''))
    {
      flag=false;
    }
  }
  if(flag==false)
  {
    alert(msg);
  }
  return flag;
}

function chechEmail(ele,msg) //mail-addresss validation
{
    if(/^\w+([\.-]?\w+)*@\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/.test(ele.value))
    {
      return true;
    }
    alert(msg);
    return false;
}

function isValidDate(ele,msg) //date validation
{
  var sText=ele.value;

  var reDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:[1-9]|1[0-2])\/(?:19|20\d{2})/;
  if(reDate.test(sText))
  {
    return true;
  }
  alert(msg);
  return false;
}
