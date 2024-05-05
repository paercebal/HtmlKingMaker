/////////////////////////////////////////////////////////
//
// STRUCTS
//
//////////////////////////////////////////////////////////

function data_city()
{
   this.population = 0;
}

function data_resources()
{
   this.caves_count = 0;
   this.landmarks_count = 0;
   this.roads_count = 0;
   this.resources_count = 0;
}

//////////////////////////////////////////////////////////

function data_resources_to_json_value(p_data_resources)
{
   let r = {}
   r["caves_count"] = p_data_resources.caves_count;
   r["landmarks_count"] = p_data_resources.landmarks_count;
   r["roads_count"] = p_data_resources.roads_count;
   r["resources_count"] = p_data_resources.resources_count;
   r["caves_count"] = p_data_resources.caves_count;
   return r;
}

//////////////////////////////////////////////////////////

function data_resources_from_json_value(p_value)
{
   let r = new data_resources();
   r.caves_count = p_value["caves_count"];
   r.landmarks_count = p_value["landmarks_count"];
   r.roads_count = p_value["roads_count"];
   r.resources_count = p_value["resources_count"];
   return r;
}

//////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////

function data()
{
   this.name = "";
   this.alignment_social = "";
   this.alignment_moral = "";
   this._size = 0;
   this.unrest = 0;

   this.stability_modifier = 0;
   this.economy_modifier = 0;
   this.loyalty_modifier = 0;

   this.treasury_bp = 50;
   
   this.resources = new data_resources();

   this.ruler_is_absent = false;
   this.ruler_charisma_modifier = 0;
   this._ruler_charisma_modifier_to_stability = false;
   this._ruler_charisma_modifier_to_economy = false;
   this._ruler_charisma_modifier_to_loyalty = false;

   this.councilor_is_absent = true;
   this.councilor_ability_modifier = 0;

   this.general_is_absent = true;
   this.general_ability_modifier = 0;

   this.grand_diplomat_is_absent = true;
   this.grand_diplomat_ability_modifier = 0;

   this.high_priest_is_absent = true;
   this.high_priest_ability_modifier = 0;

   this.magister_is_absent = true;
   this.magister_ability_modifier = 0;

   this.marshal_is_absent = true;
   this.marshal_ability_modifier = 0;

   this.royal_assassin_is_absent = true;
   this.royal_assassin_ability_modifier = 0;

   this.spy_master_is_absent = true;
   this.spy_master_ability_modifier = 0;
   this.spy_master_ability_modifier_applies_to = "STABILITY";

   this.treasurer_is_absent = true;
   this.treasurer_ability_modifier = 0;

   this.warden_is_absent = true;
   this.warden_ability_modifier = 0;

   this.cities = [];
   this.leaderships = [];
}

//////////////////////////////////////////////////////////

function data_to_json_value(p_data)
{
   let d = {};
   d["name"] = p_data.name;
   d["alignment_social"] = p_data.alignment_social;
   d["alignment_moral"] = p_data.alignment_moral;
   d["_size"] = p_data._size;
   d["unrest"] = p_data.unrest;
   d["stability_modifier"] = p_data.stability_modifier;
   d["economy_modifier"] = p_data.economy_modifier;
   d["loyalty_modifier"] = p_data.loyalty_modifier;
   d["treasury_bp"] = p_data.treasury_bp;
   d["resources"] = data_resources_to_json_value(p_data.resources);
   d["ruler_is_absent"] = p_data.ruler_is_absent;
   d["ruler_charisma_modifier"] = p_data.ruler_charisma_modifier;
   d["_ruler_charisma_modifier_to_stability"] = p_data._ruler_charisma_modifier_to_stability;
   d["_ruler_charisma_modifier_to_economy"] = p_data._ruler_charisma_modifier_to_economy;
   d["_ruler_charisma_modifier_to_loyalty"] = p_data._ruler_charisma_modifier_to_loyalty;

   d["councilor_is_absent"] = p_data.councilor_is_absent;
   d["councilor_ability_modifier"] = p_data.councilor_ability_modifier;

   d["general_is_absent"] = p_data.general_is_absent;
   d["general_ability_modifier"] = p_data.general_ability_modifier;

   d["grand_diplomat_is_absent"] = p_data.grand_diplomat_is_absent;
   d["grand_diplomat_ability_modifier"] = p_data.grand_diplomat_ability_modifier;

   d["high_priest_is_absent"] = p_data.high_priest_is_absent;
   d["high_priest_ability_modifier"] = p_data.high_priest_ability_modifier;

   d["magister_is_absent"] = p_data.magister_is_absent;
   d["magister_ability_modifier"] = p_data.magister_ability_modifier;

   d["marshal_is_absent"] = p_data.marshal_is_absent;
   d["marshal_ability_modifier"] = p_data.marshal_ability_modifier;

   d["royal_assassin_is_absent"] = p_data.royal_assassin_is_absent;
   d["royal_assassin_ability_modifier"] = p_data.royal_assassin_ability_modifier;

   d["spy_master_is_absent"] = p_data.spy_master_is_absent;
   d["spy_master_ability_modifier"] = p_data.spy_master_ability_modifier;
   d["spy_master_ability_modifier_applies_to"] = p_data.spy_master_ability_modifier_applies_to;

   d["treasurer_is_absent"] = p_data.treasurer_is_absent;
   d["treasurer_ability_modifier"] = p_data.treasurer_ability_modifier;

   d["warden_is_absent"] = p_data.warden_is_absent;
   d["warden_ability_modifier"] = p_data.warden_ability_modifier;

   return d;
}

//////////////////////////////////////////////////////////

function data_from_json_value(p_value)
{
   let d = new data();
   d.name = p_value["name"];
   d.alignment_social = p_value["alignment_social"];
   d.alignment_moral = p_value["alignment_moral"];
   d._size = p_value["_size"];
   d.unrest = p_value["unrest"];
   d.stability_modifier = p_value["stability_modifier"];
   d.economy_modifier = p_value["economy_modifier"];
   d.loyalty_modifier = p_value["loyalty_modifier"];
   d.treasury_bp = p_value["treasury_bp"];
   d.resources = data_resources_from_json_value(p_value["resources"]);
   d.ruler_is_absent = !!p_value["ruler_is_absent"];
   d.ruler_charisma_modifier = p_value["ruler_charisma_modifier"];
   d._ruler_charisma_modifier_to_stability = p_value["_ruler_charisma_modifier_to_stability"];
   d._ruler_charisma_modifier_to_economy = p_value["_ruler_charisma_modifier_to_economy"];
   d._ruler_charisma_modifier_to_loyalty = p_value["_ruler_charisma_modifier_to_loyalty"];

   d.councilor_is_absent = !!p_value["councilor_is_absent"];
   d.councilor_ability_modifier = p_value["councilor_ability_modifier"];

   d.general_is_absent = !!p_value["general_is_absent"];
   d.general_ability_modifier = p_value["general_ability_modifier"];

   d.grand_diplomat_is_absent = !!p_value["grand_diplomat_is_absent"];
   d.grand_diplomat_ability_modifier = p_value["grand_diplomat_ability_modifier"];

   d.high_priest_is_absent = !!p_value["high_priest_is_absent"];
   d.high_priest_ability_modifier = p_value["high_priest_ability_modifier"];

   d.magister_is_absent = !!p_value["magister_is_absent"];
   d.magister_ability_modifier = p_value["magister_ability_modifier"];

   d.marshal_is_absent = !!p_value["marshal_is_absent"];
   d.marshal_ability_modifier = p_value["marshal_ability_modifier"];

   d.royal_assassin_is_absent = !!p_value["royal_assassin_is_absent"];
   d.royal_assassin_ability_modifier = p_value["royal_assassin_ability_modifier"];

   d.spy_master_is_absent = !!p_value["spy_master_is_absent"];
   d.spy_master_ability_modifier = p_value["spy_master_ability_modifier"];
   d.spy_master_ability_modifier_applies_to = p_value["spy_master_ability_modifier_applies_to"];

   d.treasurer_is_absent = !!p_value["treasurer_is_absent"];
   d.treasurer_ability_modifier = p_value["treasurer_ability_modifier"];

   d.warden_is_absent = !!p_value["warden_is_absent"];
   d.warden_ability_modifier = p_value["warden_ability_modifier"];
   
   return d;
}

//////////////////////////////////////////////////////////

function data_to_json(p_data)
{
   let v = data_to_json_value(p_data);
   return JSON.stringify(v);
}

//////////////////////////////////////////////////////////

function data_from_json(p_text)
{
   let v = JSON.parse(p_text);
   return data_from_json_value(v);
}

//////////////////////////////////////////////////////////

Object.defineProperty(data.prototype, 'size', {
   get: function() { return this._size; },
   set: function(value) { this._size = value; }
});

//////////////////////////////////////////////////////////

Object.defineProperty(data.prototype, 'ruler_charisma_modifier_to_stability', {
   get: function() { return this._ruler_charisma_modifier_to_stability; },
   set: function(value)
   {
      this._ruler_charisma_modifier_to_stability = !!value;
      if(this._ruler_charisma_modifier_to_stability)
      {
         this.get_ruler_title_applies_update_to_max();
      }
   }
});

//////////////////////////////////////////////////////////

Object.defineProperty(data.prototype, 'ruler_charisma_modifier_to_economy', {
   get: function() { return this._ruler_charisma_modifier_to_economy; },
   set: function(value)
   {
      this._ruler_charisma_modifier_to_economy = !!value;
      if(this._ruler_charisma_modifier_to_economy)
      {
         this.get_ruler_title_applies_update_to_max();
      }
   }
});

//////////////////////////////////////////////////////////

Object.defineProperty(data.prototype, 'ruler_charisma_modifier_to_loyalty', {
   get: function() { return this._ruler_charisma_modifier_to_loyalty; },
   set: function(value)
   {
      this._ruler_charisma_modifier_to_loyalty = !!value;
      if(this._ruler_charisma_modifier_to_loyalty)
      {
         this.get_ruler_title_applies_update_to_max();
      }
   }
});

//////////////////////////////////////////////////////////

data.prototype.control_dc = function()
{
   return 20 + this.size;
}


//////////////////////////////////////////////////////////

data.prototype.population = function()
{
   let p = this.size * 250;
   this.cities.forEach(city => p += city.population);
   return p;
}

//////////////////////////////////////////////////////////

data.prototype.stability_from_alignment = function()
{
   let v = 0;
   if(this.alignment_social == "N")  { v += 2; }
   if(this.alignment_moral == "N")   { v += 2; }
   return v;
}

//////////////////////////////////////////////////////////

data.prototype.economy_from_alignment = function()
{
   let v = 0;
   if(this.alignment_social == "L")  { v += 2; }
   if(this.alignment_moral == "E")   { v += 2; }
   return v;
}

//////////////////////////////////////////////////////////

data.prototype.loyalty_from_alignment = function()
{
   let v = 0;
   if(this.alignment_social == "C")  { v += 2; }
   if(this.alignment_moral == "G")   { v += 2; }
   return v;
}

//////////////////////////////////////////////////////////

data.prototype.stability_from_leadership = function()
{
   let v = 0;

   if((! this.ruler_is_absent) && (this.ruler_charisma_modifier_to_stability)) { v += this.ruler_charisma_modifier; }

   if(! this.general_is_absent) { v += this.general_ability_modifier; }
   else { v -= 4; }

   if(! this.grand_diplomat_is_absent) { v += this.grand_diplomat_ability_modifier; }
   else { v -= 2; }

   if(! this.high_priest_is_absent) { v += this.high_priest_ability_modifier; }
   else { v -= 2; }

   if(! this.spy_master_is_absent)
   {
      if(this.spy_master_ability_modifier_applies_to == "STABILITY")
      {
         v += this.spy_master_ability_modifier;
      }
   }

   if(this.warden_is_absent) { v -= 2; }

   return v;
}

//////////////////////////////////////////////////////////

data.prototype.economy_from_leadership = function()
{
   let v = 0;
   
   if((! this.ruler_is_absent) && (this.ruler_charisma_modifier_to_economy)) { v += this.ruler_charisma_modifier; }
   
   if(! this.magister_is_absent) { v += this.magister_ability_modifier; }
   else { v -= 4; }

   if(! this.marshal_is_absent) { v += this.marshal_ability_modifier; }
   else { v -= 4; }

   if(! this.spy_master_is_absent)
   {
      if(this.spy_master_ability_modifier_applies_to == "ECONOMY")
      {
         v += this.spy_master_ability_modifier;
      }
   }
   else
   {
      v -= 4;
   }

   if(! this.treasurer_is_absent) { v += this.treasurer_ability_modifier; }
   else { v -= 4; }

   return v;
}

//////////////////////////////////////////////////////////

data.prototype.loyalty_from_leadership = function()
{
   let v = 0;

   if((! this.ruler_is_absent) && (this.ruler_charisma_modifier_to_loyalty)) { v += this.ruler_charisma_modifier; }

   if(! this.councilor_is_absent) { v += this.councilor_ability_modifier; }
   else { v -= 2; }

   if(! this.royal_assassin_is_absent) { v += this.royal_assassin_ability_modifier; }

   if(! this.spy_master_is_absent)
   {
      if(this.spy_master_ability_modifier_applies_to == "LOYALTY")
      {
         v += this.spy_master_ability_modifier;
      }
   }

   if(! this.warden_is_absent) { v += this.warden_ability_modifier; }
   else { v -= 4; }

   return v;
}

//////////////////////////////////////////////////////////

data.prototype.stability_total = function()
{
   return this.stability_from_alignment() + this.stability_modifier + this.resources.caves_count + Math.floor(this.resources.roads_count / 8) + this.stability_from_leadership();
}

//////////////////////////////////////////////////////////

data.prototype.economy_total = function()
{
   return this.economy_from_alignment() + this.economy_modifier + Math.floor(this.resources.roads_count / 4) + this.resources.resources_count + this.economy_from_leadership();
}

//////////////////////////////////////////////////////////

data.prototype.loyalty_total = function()
{
   return this.loyalty_from_alignment() + this.loyalty_modifier + this.resources.landmarks_count + this.loyalty_from_leadership();
}

//////////////////////////////////////////////////////////

data.prototype.stability_success_dc = function()
{
   return this.control_dc() + this.unrest - this.stability_total();
}

//////////////////////////////////////////////////////////

data.prototype.economy_success_dc = function()
{
   return this.control_dc() + this.unrest - this.economy_total();
}

//////////////////////////////////////////////////////////

data.prototype.loyalty_success_dc = function()
{
   return this.control_dc() + this.unrest - this.loyalty_total();
}

//////////////////////////////////////////////////////////

data.prototype.consumption_bp = function()
{
   return 0;
}

//////////////////////////////////////////////////////////

data.prototype.get_ruler_title = function()
{
   if(this.size < 1) return "NULL";
   if(this.size < 21) return "BARON";
   if(this.size < 81) return "DUKE";
   return "KING";
}

//////////////////////////////////////////////////////////

data.prototype.get_ruler_title_max_applies = function()
{
   if(this.size < 1) return 0;
   if(this.size < 21) return 1;
   if(this.size < 81) return 2;
   return 3;
}

//////////////////////////////////////////////////////////

data.prototype.get_ruler_title_applies_count = function()
{
   let v = 0;
   if(this.ruler_charisma_modifier_to_stability) ++v;
   if(this.ruler_charisma_modifier_to_economy) ++v;
   if(this.ruler_charisma_modifier_to_loyalty) ++v;
   return v;
}

//////////////////////////////////////////////////////////

data.prototype.get_ruler_title_applies_update_to_max = function()
{
   while(this.get_ruler_title_max_applies() < this.get_ruler_title_applies_count())
   {
      if(this._ruler_charisma_modifier_to_loyalty)
      {
         this._ruler_charisma_modifier_to_loyalty = false;
         continue;
      }
      if(this._ruler_charisma_modifier_to_economy)
      {
         this._ruler_charisma_modifier_to_economy = false;
         continue;
      }
      if(this._ruler_charisma_modifier_to_stability)
      {
         this._ruler_charisma_modifier_to_stability = false;
         continue;
      }
   }
}

//////////////////////////////////////////////////////////
//
// CALCULATION
//
//////////////////////////////////////////////////////////

function set_onchange_events_everywhere_needed()
{
   // rbr_change
   let elements = document.querySelectorAll('[rbr_change]');
   const on_change_value = "on_data_change();";
   const on_change_value_for_select = on_change_value + "update_title_for_select(this);";
   let on_change_value_final = on_change_value;

   for(let i = 0, imax = elements.length; i < imax; ++i)
   {
      let e = elements[i];

      let on_change_value_final = (e.tagName == "SELECT") ? on_change_value_for_select : on_change_value;

      if(! e.hasAttribute("onchange"))
      {
         e.setAttribute("onchange", on_change_value_final);
      }

      if(! e.hasAttribute("onkeyup"))
      {
         e.setAttribute("onkeyup", on_change_value_final);
      }
   }
}

//////////////////////////////////////////////////////////
//
// CALCULATION
//
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
//
// DATA
//
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//
// DATA RETRIEVAL
//
//////////////////////////////////////////////////////////

function retrieve_data_from_HTML(p_data)
{
   p_data.name = value_as_string("ID_kingdom_name");
   p_data.alignment_social = value_as_string("ID_kingdom_alignment_social");
   p_data.alignment_moral = value_as_string("ID_kingdom_alignment_moral");
   p_data.size = value_as_integer("ID_kingdom_size");
   p_data.unrest = value_as_integer("ID_unrest");

   p_data.stability_modifier = value_as_integer("ID_kingdom_stability_modifier");
   p_data.economy_modifier = value_as_integer("ID_kingdom_economy_modifier");
   p_data.loyalty_modifier = value_as_integer("ID_kingdom_loyalty_modifier");

   p_data.resources.caves_count = value_as_integer("ID_caves_hex_count");
   p_data.resources.landmarks_count = value_as_integer("ID_landmarks_hex_count");
   p_data.resources.roads_count = value_as_integer("ID_roads_hex_count");
   p_data.resources.resources_count = value_as_integer("ID_resources_hex_count");
   
   p_data.ruler_is_absent = value_as_boolean("ID_leadership_ruler_is_absent");
   p_data.ruler_charisma_modifier = value_as_integer("ID_leadership_ruler_charisma_modifier");
   p_data.ruler_charisma_modifier_to_stability = value_as_boolean("ID_leadership_ruler_cha_mod_for_stability");
   p_data.ruler_charisma_modifier_to_economy = value_as_boolean("ID_leadership_ruler_cha_mod_for_economy");
   p_data.ruler_charisma_modifier_to_loyalty = value_as_boolean("ID_leadership_ruler_cha_mod_for_loyalty");

   p_data.councilor_is_absent = value_as_boolean("ID_leadership_councilor_is_absent");
   p_data.councilor_ability_modifier = value_as_integer("ID_leadership_councilor_ability_modifier");

   p_data.general_is_absent = value_as_boolean("ID_leadership_general_is_absent");
   p_data.general_ability_modifier = value_as_integer("ID_leadership_general_ability_modifier");

   p_data.grand_diplomat_is_absent = value_as_boolean("ID_leadership_grand_diplomat_is_absent");
   p_data.grand_diplomat_ability_modifier = value_as_integer("ID_leadership_grand_diplomat_ability_modifier");

   p_data.high_priest_is_absent = value_as_boolean("ID_leadership_high_priest_is_absent");
   p_data.high_priest_ability_modifier = value_as_integer("ID_leadership_high_priest_ability_modifier");

   p_data.magister_is_absent = value_as_boolean("ID_leadership_magister_is_absent");
   p_data.magister_ability_modifier = value_as_integer("ID_leadership_magister_ability_modifier");

   p_data.marshal_is_absent = value_as_boolean("ID_leadership_marshal_is_absent");
   p_data.marshal_ability_modifier = value_as_integer("ID_leadership_marshal_ability_modifier");

   p_data.royal_assassin_is_absent = value_as_boolean("ID_leadership_royal_assassin_is_absent");
   p_data.royal_assassin_ability_modifier = value_as_integer("ID_leadership_royal_assassin_ability_modifier");

   p_data.spy_master_is_absent = value_as_boolean("ID_leadership_spy_master_is_absent");
   p_data.spy_master_ability_modifier = value_as_integer("ID_leadership_spy_master_ability_modifier");
   p_data.spy_master_ability_modifier_applies_to = select_value_as_string("ID_leadership_spy_master_ability_modifier_applies_to");

   p_data.treasurer_is_absent = value_as_boolean("ID_leadership_treasurer_is_absent");
   p_data.treasurer_ability_modifier = value_as_integer("ID_leadership_treasurer_ability_modifier");

   p_data.warden_is_absent = value_as_boolean("ID_leadership_warden_is_absent");
   p_data.warden_ability_modifier = value_as_integer("ID_leadership_warden_ability_modifier");

}

//////////////////////////////////////////////////////////
//
// CALCULATION DETAILS
//
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
//
// DISPLAY
//
//////////////////////////////////////////////////////////

function load_data_from_textarea(p_textarea_id)
{
   let s = id(p_textarea_id).value;
   return data_from_json(s);
}

function save_data_into_textarea(p_data, p_textarea_id)
{
   let s = data_to_json(p_data);
   id(p_textarea_id).value = s;
}

function display_data_into_HTML(p_data)
{
   id("ID_kingdom_name").value = p_data.name;
   
   select_set_value_as_string("ID_kingdom_alignment_social", p_data.alignment_social);
   select_set_value_as_string("ID_kingdom_alignment_moral", p_data.alignment_moral);
   
   set_value_as_integer("ID_kingdom_size", p_data.size);
   set_value_as_integer("ID_unrest", p_data.unrest);

   id("ID_control_dc").value = p_data.control_dc();
   id("ID_kingdom_population").value = p_data.population();

   id("ID_kingdom_stability_success_dc").value = p_data.stability_success_dc();
   id("ID_kingdom_stability_total").value = p_data.stability_total();
   id("ID_kingdom_stability_from_alignment").value = p_data.stability_from_alignment();

   set_value_as_integer("ID_kingdom_stability_modifier", p_data.stability_modifier);

   id("ID_kingdom_economy_success_dc").value = p_data.economy_success_dc();
   id("ID_kingdom_economy_total").value = p_data.economy_total();
   id("ID_kingdom_economy_from_alignment").value = p_data.economy_from_alignment();

   set_value_as_integer("ID_kingdom_economy_modifier", p_data.economy_modifier);

   id("ID_kingdom_loyalty_success_dc").value = p_data.loyalty_success_dc();
   id("ID_kingdom_loyalty_total").value = p_data.loyalty_total();
   id("ID_kingdom_loyalty_from_alignment").value = p_data.loyalty_from_alignment();

   set_value_as_integer("ID_kingdom_loyalty_modifier", p_data.loyalty_modifier);

   id("ID_kingdom_consumption_bp").value = p_data.consumption_bp();
   id("ID_kingdom_treasury_bp").value = p_data.treasury_bp;

   set_value_as_integer("ID_caves_hex_count", p_data.resources.caves_count);
   set_value_as_integer("ID_landmarks_hex_count", p_data.resources.landmarks_count);
   set_value_as_integer("ID_roads_hex_count", p_data.resources.roads_count);
   set_value_as_integer("ID_resources_hex_count", p_data.resources.resources_count);

   set_value_as_boolean("ID_leadership_ruler_is_absent", p_data.ruler_is_absent);

   set_value_as_integer("ID_leadership_ruler_charisma_modifier", p_data.ruler_charisma_modifier);

   select_set_value_as_string("ID_leadership_ruler_title", p_data.get_ruler_title());

   set_value_as_boolean("ID_leadership_ruler_cha_mod_for_stability", p_data.ruler_charisma_modifier_to_stability);
   set_value_as_boolean("ID_leadership_ruler_cha_mod_for_economy", p_data.ruler_charisma_modifier_to_economy);
   set_value_as_boolean("ID_leadership_ruler_cha_mod_for_loyalty", p_data.ruler_charisma_modifier_to_loyalty);

   set_value_as_boolean("ID_leadership_councilor_is_absent", p_data.councilor_is_absent);
   set_value_as_integer("ID_leadership_councilor_ability_modifier", p_data.councilor_ability_modifier);

   set_value_as_boolean("ID_leadership_general_is_absent", p_data.general_is_absent);
   set_value_as_integer("ID_leadership_general_ability_modifier", p_data.general_ability_modifier);

   set_value_as_boolean("ID_leadership_grand_diplomat_is_absent", p_data.grand_diplomat_is_absent);
   set_value_as_integer("ID_leadership_grand_diplomat_ability_modifier", p_data.grand_diplomat_ability_modifier);

   set_value_as_boolean("ID_leadership_high_priest_is_absent", p_data.high_priest_is_absent);
   set_value_as_integer("ID_leadership_high_priest_ability_modifier", p_data.high_priest_ability_modifier);

   set_value_as_boolean("ID_leadership_magister_is_absent", p_data.magister_is_absent);
   set_value_as_integer("ID_leadership_magister_ability_modifier", p_data.magister_ability_modifier);

   set_value_as_boolean("ID_leadership_marshal_is_absent", p_data.marshal_is_absent);
   set_value_as_integer("ID_leadership_marshal_ability_modifier", p_data.marshal_ability_modifier);

   set_value_as_boolean("ID_leadership_royal_assassin_is_absent", p_data.royal_assassin_is_absent);
   set_value_as_integer("ID_leadership_royal_assassin_ability_modifier", p_data.royal_assassin_ability_modifier);

   set_value_as_boolean("ID_leadership_spy_master_is_absent", p_data.spy_master_is_absent);
   set_value_as_integer("ID_leadership_spy_master_ability_modifier", p_data.spy_master_ability_modifier);
   set_value_as_string("ID_leadership_spy_master_ability_modifier_applies_to", p_data.spy_master_ability_modifier_applies_to);

   set_value_as_boolean("ID_leadership_treasurer_is_absent", p_data.treasurer_is_absent);
   set_value_as_integer("ID_leadership_treasurer_ability_modifier", p_data.treasurer_ability_modifier);

   set_value_as_boolean("ID_leadership_warden_is_absent", p_data.warden_is_absent);
   set_value_as_integer("ID_leadership_warden_ability_modifier", p_data.warden_ability_modifier);

   save_data_into_textarea(p_data, "ID_JSON_output");
}

