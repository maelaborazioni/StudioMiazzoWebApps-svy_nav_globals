/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9989cdd1-803a-4a47-a1f2-ffcbd2dca2af"}
 */
var a = 'a';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C13D89EA-D0DF-428E-9699-19B77646A6D3"}
 */
var bg_row_edited = "#F5F6BE";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45FED161-C79F-499B-A6CB-09B87F455235"}
 */
var bg_row_even = "#ffffff";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"231ADA1C-AEC8-4B75-8D46-5EA5C8AECD90"}
 */
var bg_row_odd = "#f0f0f0";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9AC70209-2D23-449C-B805-16D72DA7AB85"}
 */
var bg_row_selected = "#EC1C24";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3DC5660B-5068-47B6-8BBE-52106C32B146"}
 */
var i18n_filter = null;

/**
 * @type {{
 * 			activeView:Number,
 * 			arrayField:String,
 * 			arrayForm:String,
 * 			bar_triggered: Boolean,
 * 			bookmarks:Array,
 * 			browser_buttonbar:String,
 * 			childRelation:{field:String,
 * 							form:String,
 * 							field_child:String},
 * 			default_edit_template:Number,
 * 			form_view_01:String,
 * 			form_view_02:String,
 * 			his:{foundset:Array,
 * 							parentProgram:String,
 * 							tabIndex:Number,
 * 							parentRec:JSRecord,
 * 							foundset_related_form:String,
 * 							foundset_related_text:String},
 * 			his_max_entries:Number,
 * 			keys:Array,
 * 			lastView:Number,
 * 			lastProgram:String,
 * 			mode:String,
 * 			new_record_filter:Array,
 * 			noHistory: Boolean,
 * 			openNewTab:Boolean,
 * 			program:{},
 * 			recordHistory:Array,
 * 			related_text:String,
 * 			related_form:String,
 * 			relatedForm:String,
 * 			setMenuTree:Boolean,
 * 			shortcuts:Array,
 * 			stack:Array,
 * 			stack_position:Number,
 * 			switchedForEdit:Boolean,
 * 			validation_msg:String,
 * 			viewer_buttonbar:String,
 * 			viewHasTable:Function
 * }}
 *
 * @properties={typeid:35,uuid:"cbfd74e6-d583-452a-a487-1775e4dd01bb",variableType:-4}
 */
var nav = { form_view_01:null,
			form_view_02:null,
			related_text:null,
			mode:'browse',
			activeView:null,
			default_edit_template:null,
			stack_position:null,
			validation_msg:null,
			keys:null,
			stack:[],
			his_max_entries:null,
			lastProgram:null,
			lastView:null,
			notFromTabs:null,
			bookmarks:[],
			shortcuts:[],
			recordHistory:[],
			his:{foundset_related_form:null,foundset_related_text:null,foundset:[],parentRec:null},
			new_record_filter:[],
			childRelation:{},
			getTemplate:null,
			getTabProgram:null,
			getTabRelation:null,
			getTabForm:null,
			getTabSelected:null,
			getCurrentFormName:null,
			browser_buttonbar: null,
			viewer_buttonbar:null,
			viewer_form:null,
			viewHasDetail:null
			// MA_Variazioni
			,template_types:null
			,toggle:null
			,readOnlyset:null
			,shortkeys:null
			,tabSearchForms:null
			,template_types_notabs:null
			,getCurrentTabFormName:null
			,browser_form:null
			};

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5934f02a-50a8-4249-9e1b-6d6c17d3178c"}
 */
var nav_base_form_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"bc9bb11f-757c-45cf-9e7e-a0bccd391601"}
 */
var nav_btn_all_records = 'btn_all_records';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"362a06c9-4fe0-4867-9b47-b9422f6c5f22"}
 */
var nav_btn_delete = 'btn_delete';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"535a1133-aa27-4aaa-8667-b28cae8d04bb"}
 */
var nav_btn_duplicate = 'btn_duplicate';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ba28b12e-1517-44ca-a527-b11fcd657819"}
 */
var nav_btn_edit = 'btn_edit';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3253e6f6-9255-4052-8394-a2c251da7fea"}
 */
var nav_btn_export = 'btn_export';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"13e3afa0-5748-4816-b37b-04321423e24a"}
 */
var nav_btn_help = 'btn_help';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8536a34d-bb6c-4665-82a2-784754ea1a18"}
 */
var nav_btn_method = 'btn_method';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"dc8c9111-512b-4e61-a49d-4b121500586c"}
 */
var nav_btn_new = 'btn_new';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82e5a40e-ecc1-4d94-8bd0-1e5cfab4f09d"}
 */
var nav_btn_print = 'btn_print';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"c7dddd00-2f2e-4295-90bc-ba2da3cf0894"}
 */
var nav_btn_rec_nav = 'btn_rec_nav';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"fc39e399-8d51-4d07-8e95-7a57604c28d1"}
 */
var nav_btn_record_information = 'btn_record_information';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21A70618-53FC-4559-AE83-F793F5A51767"}
 */
var nav_btn_required_fields = 'btn_required_fields';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"c9fcd745-6110-4cbb-86ee-01bc07cc467e"}
 */
var nav_btn_resettblheader = 'btn_resettblheader';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7338422f-bbad-48cd-852c-2ea664049cc0"}
 */
var nav_btn_search = 'btn_search';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08a7780a-6254-4edf-bc9f-849e77f83eec"}
 */
var nav_btn_search_prop = 'btn_search_prop';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54482dd8-c764-4bf5-9bb8-9ec294814cec"}
 */
var nav_btn_sort = 'btn_sort';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"207adf86-261e-4777-9af2-fb898a29e28e"}
 */
var nav_current_formname = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38778921-46EB-43DF-A922-2F6BEB5B8C46"}
 */
var nav_db_framework = 'svy_framework';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0bdc7ecf-5174-49e0-a2a9-a64eee359e80"}
 */
var nav_element_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"29b4b02a-4c74-4acc-88f9-6f888ce1d3bf"}
 */
var nav_function = 'F';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4e1da578-444e-40b5-aca2-66fe82ddf13b"}
 */
var nav_key_program = 'program';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F1130EED-6FEF-4D43-9522-96137C5B5954",variableType:4}
 */
var nav_menu_item_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5de42e4b-6c7e-4010-9704-12cb1312073a"}
 */
var nav_menu_root_menutype = 'R';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3de680f4-3b63-4aea-b6cd-e3ab5ba19aee"}
 */
var nav_program_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"e286bbea-bd64-4def-9d19-509f55429ea5"}
 */
var nav_properties = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"57251d34-cf8b-4be3-aa83-010b4c327666"}
 */
var nav_report = 'R';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96d18e27-415c-4820-bd96-9c313fa9fd23",variableType:4}
 */
var nav_searchCriteriaID;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4DED79F2-3ACE-487B-A390-9AFDAD3C16C2",variableType:4}
 */
var nav_show_open_tabs = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5F6BAD42-0A78-4EF4-A2FD-66C069A5ECE2"}
 */
var nav_solution_name = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2704ECDC-CE90-4209-901B-69F81C82951B"}
 */
var nav_styleForm = 'svy_nav_style';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AAC33774-D96E-4A35-95B9-31C20EEB4ADD",variableType:4}
 */
var one = 1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"f1d980e5-6e5f-454c-9c16-8b91acfde979"}
 */
var owner_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3861551c-9896-43b4-ad67-096139463a24"}
 */
var progam_shortname = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66fb8e86-3727-46be-bd5b-b79d7a6811c8"}
 */
var svy_nav_form_name = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"a47dc4ce-44e4-4110-9a9c-a56681239d70"}
 */
var svy_nav_search = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"de982a16-434e-4234-b600-bf4ea4e8f8fc"}
 */
var svy_nav_search_form = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77B93438-52A8-46FA-ADA0-0FCE4097C5FA"}
 */
var svy_sec_lgn_organization_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7ECBD89-0D71-4EE1-A9FC-AD8EBFA1EE5F"}
 */
var svy_sec_lgn_owner_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C1B3E40-61F4-4FBD-8657-F9CD92284AF4",variableType:4}
 */
var svy_sec_lgn_user_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D83A62B8-5181-410E-83C6-77E17FD2CCEF",variableType:4}
 */
var svy_sec_lgn_user_org_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"e3514606-b6e1-4236-9d91-d1baea1a6335",variableType:4}
 */
var user_id = 5;

/**
 * @properties={typeid:24,uuid:"61BD73E2-65AC-4AD7-889C-800DD1AE5380"}
 */
function svy_nav_setI18N(i18nFilter) {
	globals.i18n_filter = i18nFilter;
	if(i18nFilter)
	{
		databaseManager.addTableFilterParam('svy_framework', "i18n_messages", "i18n_organization_id", "IN", (globals.i18n_filter, null));
		//i18n.setI18NMessagesFilter('i18n_organization_id', globals.i18n_filter);
	}
}
