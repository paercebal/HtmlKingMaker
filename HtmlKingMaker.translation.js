g_language = {};

function get_current_language()
{
   let s = document.getElementById("ID_language");
   return s.options.item([s.selectedIndex]).value;
}

function on_language_change()
{
   change_language(get_current_language());
}

function change_language(p_language_id)
{
   if(! Object.hasOwn(g_language, p_language_id))
   {
      alert("No known language of id [" + p_language_id + "]");
      return;
   }
   
   let language = g_language[p_language_id];
   
   {
      let elements = document.querySelectorAll('[rbr_translate]');
      
      for(let i = 0, imax = elements.length; i < imax; ++i)
      {
         let e = elements[i];
         let text_id = e.getAttribute("rbr_translate");
         let title_id = text_id + "_TITLE";
         
         if(Object.hasOwn(language, text_id))
         {
            let text = language[text_id];
            e.innerHTML = text;
         }
         else
         {
            e.innerHTML = "TRANSLATION ERROR: [" + text_id + "]";
         }
         
         if(Object.hasOwn(language, title_id))
         {
            let text = language[title_id];
            e.setAttribute("title", text);
         }
      }
   }
   
   {
      let elements = document.querySelectorAll('[rbr_hint]');
      
      for(let i = 0, imax = elements.length; i < imax; ++i)
      {
         let e = elements[i];
         let text_id = e.getAttribute("rbr_hint");
         let title_id = text_id + "_TITLE";
         
         if(Object.hasOwn(language, title_id))
         {
            let text = language[title_id];
            e.setAttribute("title", text);
         }
      }
   }
}

function update_title_for_all_select()
{
   let elements = document.querySelectorAll('select');
   
   for(let i = 0, imax = elements.length; i < imax; ++i)
   {
      let e = elements[i];
      update_title_for_select(e);
   }
}

function update_title_for_select(p_this)
{
   let e = p_this.options.item([p_this.selectedIndex]);

   if(! e.hasAttribute("rbr_translate"))
   {
      return;
   }

   let language_id = get_current_language();

   if(! Object.hasOwn(g_language, language_id))
   {
      alert("No known language of id [" + language_id + "]");
      return;
   }
   
   let language = g_language[language_id];

   let text_id = e.getAttribute("rbr_translate");
   let title_id = text_id + "_TITLE";

   if(Object.hasOwn(language, title_id))
   {
      let text = language[title_id];
      p_this.setAttribute("title", text);
   }
}


