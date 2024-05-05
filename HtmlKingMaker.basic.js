function id(p_id)
{
   let o = document.getElementById(p_id);
   
   if(o == null)
   {
      alert("ERROR:\nElement [" + p_id + "] not found");
   }
   
   return o;
}

function value_as_string(p_id)
{
   let o = id(p_id);
   
   if(o.getAttribute("type") == "checkbox")
   {
      return (o.checked) ? "true" : "false";
   }

   return o.value;
}

function set_value_as_string(p_id, p_value)
{
   let o = id(p_id);
   
   if(o.getAttribute("type") == "checkbox")
   {
      o.checked = (p_value == "true");
      return;
   }
   
   o.value = p_value;
}

function value_as_integer(p_id)
{
   let o = id(p_id);
   
   if(o.getAttribute("type") == "checkbox")
   {
      return (o.checked) ? 1 : 0;
   }
   
   return parseInt(o.value, 10);
}

function set_value_as_integer(p_id, p_value)
{
   p_value = parseInt(p_value, 10);
   let o = id(p_id);
   
   if(o.getAttribute("type") == "checkbox")
   {
      o.checked = (p_value != 0);
      return;
   }
   
   o.value = p_value;
}

function value_as_boolean(p_id)
{
   let o = id(p_id);
   
   if(o.getAttribute("type") == "checkbox")
   {
      return !!(o.checked);
   }
   
   if(o.value == "true") return true;
   if(o.value == "false") return false;
   return !!parseInt(o.value, 10);
}

function set_value_as_boolean(p_id, p_value)
{
   p_value = !!p_value;
   let o = id(p_id);
   
   if(o.getAttribute("type") == "checkbox")
   {
      o.checked = p_value;
      return;
   }
   
   o.value = p_value ? "true" : "false";
   
   if(o.value == "true") return true;
   if(o.value == "false") return false;
   return !!parseInt(o.value, 10);
}

function select_value_as_string(p_id)
{
   let s = id(p_id);
   return s.options.item(s.selectedIndex).value;
}

function select_value_as_integer(p_id)
{
   return parseInt(select_value_as_string(p_id), 10);
}

function select_set_value_as_string(p_id, p_value)
{
   let s = id(p_id);
   let index = -1;
   
   for(let i = 0, imax = s.options.length; i < imax; ++i)
   {
      let o = s.options.item(i);
      if(o.value == p_value)
      {
         o.setAttribute("selected", "selected");
         index = i;
      }
      else
      {
         o.removeAttribute("selected");
      }
   }
   
   s.selectedIndex = index;
}

