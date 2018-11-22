Search.setIndex({docnames:["_api/reda","_api/reda.configs","_api/reda.containers","_api/reda.eis","_api/reda.exporters","_api/reda.importers","_api/reda.importers.legacy","_api/reda.main","_api/reda.plotters","_api/reda.testing","_api/reda.utils","_examples/01_ERT/plot_syscal_dc","_examples/01_ERT/plot_syscal_ip","_examples/02_SIP04/plot_sip04","_examples/03_sEIT/plot_eit_fzj","_examples/03_sEIT/plot_eit_fzj_check","_examples/03_sEIT/plot_radic_sip256c","_examples/index","about","api","data_containers","debugging","filtering","importers","index","installation","test_data"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["_api/reda.rst","_api/reda.configs.rst","_api/reda.containers.rst","_api/reda.eis.rst","_api/reda.exporters.rst","_api/reda.importers.rst","_api/reda.importers.legacy.rst","_api/reda.main.rst","_api/reda.plotters.rst","_api/reda.testing.rst","_api/reda.utils.rst","_examples/01_ERT/plot_syscal_dc.rst","_examples/01_ERT/plot_syscal_ip.rst","_examples/02_SIP04/plot_sip04.rst","_examples/03_sEIT/plot_eit_fzj.rst","_examples/03_sEIT/plot_eit_fzj_check.rst","_examples/03_sEIT/plot_radic_sip256c.rst","_examples/index.rst","about.rst","api.rst","data_containers.rst","debugging.rst","filtering.rst","importers.rst","index.rst","installation.rst","test_data.rst"],objects:{"":{reda:[19,0,0,"-"]},"reda.configs":{configManager:[1,0,0,"-"]},"reda.configs.configManager":{ConfigManager:[1,1,1,""]},"reda.configs.configManager.ConfigManager":{add_to_configs:[1,2,1,""],clear_configs:[1,2,1,""],gen_all_current_dipoles:[1,2,1,""],gen_all_voltages_for_injections:[1,2,1,""],gen_configs_permutate:[1,2,1,""],gen_dipole_dipole:[1,2,1,""],gen_gradient:[1,2,1,""],gen_reciprocals:[1,2,1,""],gen_schlumberger:[1,2,1,""],gen_wenner:[1,2,1,""],load_configs:[1,2,1,""],load_crmod_config:[1,2,1,""],load_crmod_volt:[1,2,1,""],nr_of_configs:[1,3,1,""],remove_duplicates:[1,2,1,""],split_into_normal_and_reciprocal:[1,2,1,""],to_pg_scheme:[1,2,1,""],write_configs:[1,2,1,""],write_crmod_config:[1,2,1,""],write_crmod_volt:[1,2,1,""]},"reda.containers":{CR:[2,0,0,"-"],ERT:[2,0,0,"-"],SIP:[2,0,0,"-"],TDIP:[2,0,0,"-"],sEIT:[2,0,0,"-"]},"reda.containers.CR":{CR:[2,1,1,""]},"reda.containers.ERT":{ERT:[2,1,1,""],Exporters:[2,1,1,""],Importers:[2,1,1,""],ListHandler:[2,1,1,""],LogDataChanges:[2,1,1,""],LoggingClass:[2,1,1,""],append_doc_of:[2,4,1,""],prepend_doc_of:[2,4,1,""]},"reda.containers.ERT.ERT":{check_dataframe:[2,2,1,""],compute_K_analytical:[2,2,1,""],compute_reciprocal_errors:[2,2,1,""],filter:[2,2,1,""],sub_filter:[2,2,1,""],to_ip:[2,2,1,""]},"reda.containers.ERT.Exporters":{export_bert:[2,2,1,""],export_pygimli:[2,2,1,""]},"reda.containers.ERT.Importers":{import_bert:[2,2,1,""],import_pygimli:[2,2,1,""],import_syscal_bin:[2,2,1,""],import_syscal_txt:[2,2,1,""]},"reda.containers.ERT.ListHandler":{emit:[2,2,1,""]},"reda.containers.ERT.LoggingClass":{print_data_journal:[2,2,1,""],print_log:[2,2,1,""],setup_logger:[2,2,1,""]},"reda.containers.SIP":{SIP:[2,1,1,""],importers:[2,1,1,""]},"reda.containers.SIP.SIP":{check_dataframe:[2,2,1,""],reduce_duplicate_frequencies:[2,2,1,""]},"reda.containers.SIP.importers":{import_sip04:[2,2,1,""]},"reda.containers.TDIP":{TDIP:[2,1,1,""]},"reda.containers.TDIP.TDIP":{check_dataframe:[2,2,1,""],plot_decay_curve:[2,2,1,""],to_cr:[2,2,1,""]},"reda.containers.sEIT":{append_doc_of:[2,4,1,""],importers:[2,1,1,""],sEIT:[2,1,1,""]},"reda.containers.sEIT.importers":{import_crtomo:[2,2,1,""],import_eit_fzj:[2,2,1,""],import_sip256c:[2,2,1,""]},"reda.containers.sEIT.sEIT":{abmn:[2,3,1,""],check_dataframe:[2,2,1,""],filter_incomplete_spectra:[2,2,1,""],fix_sign_with_K:[2,2,1,""],gen_geometric_factors_analytical:[2,2,1,""],get_spectrum:[2,2,1,""],plot_all_spectra:[2,2,1,""],query:[2,2,1,""],remove_frequencies:[2,2,1,""],scatter_norrec:[2,2,1,""],subquery:[2,2,1,""]},"reda.eis":{convert:[3,0,0,"-"],plots:[3,0,0,"-"],test_convert:[3,0,0,"-"],units:[3,0,0,"-"]},"reda.eis.convert":{convert:[3,4,1,""],from_ccomplex:[3,4,1,""],from_cmag_cpha:[3,4,1,""],from_cre_cim:[3,4,1,""],from_cre_cmim:[3,4,1,""],from_lnrmag_rpha:[3,4,1,""],from_log10rmag_rpha:[3,4,1,""],from_rcomplex:[3,4,1,""],from_rmag_rpha:[3,4,1,""],from_rre_rim:[3,4,1,""],from_rre_rmim:[3,4,1,""],generic_magpha_to_reim:[3,4,1,""],split_data:[3,4,1,""],to_ccomplex:[3,4,1,""],to_cmag_cpha:[3,4,1,""],to_complex:[3,4,1,""],to_cre_cim:[3,4,1,""],to_cre_cmim:[3,4,1,""],to_lnrmag_rpha:[3,4,1,""],to_log10rmag_rpha:[3,4,1,""],to_rcomplex:[3,4,1,""],to_rmag_rpha:[3,4,1,""],to_rre_rim:[3,4,1,""],to_rre_rmim:[3,4,1,""]},"reda.eis.plots":{multi_sip_response:[3,1,1,""],sip_response:[3,1,1,""]},"reda.eis.plots.multi_sip_response":{add:[3,2,1,""],plot_cim:[3,2,1,""],plot_cre:[3,2,1,""],plot_rmag:[3,2,1,""],plot_rpha:[3,2,1,""],set_xlim:[3,2,1,""]},"reda.eis.plots.sip_response":{plot:[3,2,1,""],to_one_line:[3,2,1,""]},"reda.eis.test_convert":{TestClass_input_styles:[3,1,1,""],TestClass_test_converters:[3,1,1,""]},"reda.eis.test_convert.TestClass_input_styles":{precompute_values:[3,2,1,""],setup:[3,2,1,""],test_input_styles:[3,2,1,""]},"reda.eis.test_convert.TestClass_test_converters":{check_from_function:[3,2,1,""],check_to_function:[3,2,1,""],precompute_values:[3,2,1,""],setup:[3,2,1,""],teardown:[3,5,1,""],test_convert:[3,2,1,""],test_from_cmag_cpha:[3,2,1,""],test_from_cre_cim:[3,2,1,""],test_from_cre_cmim:[3,2,1,""],test_from_rmag_rpha:[3,2,1,""],test_from_rre_rim:[3,2,1,""],test_from_rre_rmim:[3,2,1,""],test_to_cmag_cpha:[3,2,1,""],test_to_cre_cim:[3,2,1,""],test_to_cre_mim:[3,2,1,""],test_to_rre_rim:[3,2,1,""]},"reda.eis.units":{get_label:[3,4,1,""]},"reda.exporters":{bert:[4,0,0,"-"],crtomo:[4,0,0,"-"],syscal:[4,0,0,"-"]},"reda.exporters.bert":{export_bert:[4,4,1,""]},"reda.exporters.crtomo":{save_block_to_crt:[4,4,1,""],write_files_to_directory:[4,4,1,""]},"reda.exporters.syscal":{syscal_save_to_config_txt:[4,4,1,""]},"reda.importers":{bert:[5,0,0,"-"],crtomo:[5,0,0,"-"],eit_fzj:[5,0,0,"-"],eit_version_2010:[5,0,0,"-"],eit_version_2013:[5,0,0,"-"],eit_version_2017:[5,0,0,"-"],eit_version_2018a:[5,0,0,"-"],geotom:[5,0,0,"-"],iris_syscal_pro:[5,0,0,"-"],legacy:[6,0,0,"-"],radic_sip256c:[5,0,0,"-"],res2dinv:[5,0,0,"-"],sip04:[5,0,0,"-"]},"reda.importers.bert":{import_ohm:[5,4,1,""]},"reda.importers.crtomo":{load_mod_file:[5,4,1,""],load_seit_data:[5,4,1,""]},"reda.importers.eit_fzj":{apply_correction_factors:[5,4,1,""],compute_quadrupoles:[5,4,1,""],get_mnu0_data:[5,4,1,""]},"reda.importers.eit_version_2018a":{convert_electrode:[5,4,1,""]},"reda.importers.geotom":{add_file:[5,4,1,""]},"reda.importers.iris_syscal_pro":{import_bin:[5,4,1,""],import_txt:[5,4,1,""]},"reda.importers.legacy":{eit160:[6,0,0,"-"],eit40:[6,0,0,"-"]},"reda.importers.legacy.eit160":{import_medusa_data:[6,4,1,""]},"reda.importers.legacy.eit40":{apply_correction_factors:[6,4,1,""],import_medusa_data:[6,4,1,""]},"reda.importers.radic_sip256c":{compute_quadrupoles:[5,4,1,""],parse_radic_file:[5,4,1,""],parse_reading:[5,4,1,""],write_crmod_file:[5,4,1,""]},"reda.importers.res2dinv":{add_dat_file:[5,4,1,""]},"reda.importers.sip04":{import_sip04_data:[5,4,1,""],import_sip04_data_all:[5,4,1,""]},"reda.main":{logger:[7,0,0,"-"],units:[7,0,0,"-"]},"reda.main.logger":{setup_logger:[7,4,1,""]},"reda.main.units":{get_label:[7,4,1,""]},"reda.plotters":{histograms:[8,0,0,"-"],plots2d:[8,0,0,"-"],pseudoplots:[8,0,0,"-"],time_series:[8,0,0,"-"]},"reda.plotters.histograms":{plot_histograms:[8,4,1,""],plot_histograms_extra_dims:[8,4,1,""],plot_histograms_it_extra_dims:[8,4,1,""]},"reda.plotters.plots2d":{matplot:[8,4,1,""],plot_pseudodepths:[8,4,1,""],plot_pseudosection:[8,4,1,""],plot_rawdataplot:[8,4,1,""]},"reda.plotters.pseudoplots":{plot_ps_extra:[8,4,1,""],plot_pseudosection_type2:[8,4,1,""],test_get_unique_identifiers:[8,4,1,""]},"reda.plotters.time_series":{plot_quadpole_evolution:[8,4,1,""]},"reda.testing":{containers:[9,0,0,"-"],test:[9,4,1,""]},"reda.utils":{data:[10,0,0,"-"],eit_fzj_utils:[10,0,0,"-"],filter_config_types:[10,0,0,"-"],fix_sign_with_K:[10,0,0,"-"],geom_fac_crtomo:[10,0,0,"-"],geometric_factors:[10,0,0,"-"],helper_functions:[10,0,0,"-"],mpl:[10,0,0,"-"],norrec:[10,0,0,"-"],pseudo_positions:[10,0,0,"-"]},"reda.utils.data":{download_data:[10,4,1,""]},"reda.utils.eit_fzj_utils":{apply_correction_factors:[10,4,1,""],check_resistor_board_measurements:[10,4,1,""],compute_correction_factors:[10,4,1,""]},"reda.utils.filter_config_types":{filter:[10,4,1,""]},"reda.utils.fix_sign_with_K":{fix_sign_with_K:[10,4,1,""],test_fix_sign_with_K:[10,4,1,""]},"reda.utils.geom_fac_crtomo":{compute_K:[10,4,1,""],get_default_settings:[10,4,1,""]},"reda.utils.geometric_factors":{apply_K:[10,4,1,""],compute_K_analytical:[10,4,1,""],compute_K_numerical:[10,4,1,""]},"reda.utils.helper_functions":{opt_import:[10,4,1,""],search:[10,4,1,""],which:[10,4,1,""]},"reda.utils.mpl":{mpl_get_cb_bound_below_plot:[10,4,1,""],mpl_get_cb_bound_next_to_plot:[10,4,1,""],setup:[10,4,1,""]},"reda.utils.norrec":{assign_norrec_diffs:[10,4,1,""],assign_norrec_to_df:[10,4,1,""],average_repetitions:[10,4,1,""],compute_norrec_differences:[10,4,1,""],get_test_df:[10,4,1,""],get_test_df_advanced:[10,4,1,""],test2:[10,4,1,""],test_norrec_assignments1:[10,4,1,""]},"reda.utils.pseudo_positions":{get_xy_simple_dipole_dipole:[10,4,1,""]},reda:{configs:[1,0,0,"-"],containers:[2,0,0,"-"],eis:[3,0,0,"-"],exporters:[4,0,0,"-"],importers:[5,0,0,"-"],main:[7,0,0,"-"],plotters:[8,0,0,"-"],testing:[9,0,0,"-"],utils:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:classmethod"},terms:{"00000000e":3,"00116268j":3,"00164187j":3,"00231829j":3,"00327285j":3,"00461938j":3,"0065178j":3,"00919217j":3,"01295546j":3,"01824266j":3,"02565412j":3,"03601005j":3,"05015818j":13,"05041399j":3,"07031682j":3,"09755774j":3,"0x2b7812961c18":14,"11859279j":13,"132345301j":13,"13433101j":3,"14733034j":13,"16227766e":3,"18297794j":3,"1e4":5,"1hz":5,"24543425j":3,"256c":18,"2i_spectrum_id_":2,"32210768j":3,"41005275j":3,"411957126j":13,"47746068j":13,"4th":18,"50083533j":3,"51828971j":3,"57965851j":3,"59248806j":3,"62341325e":3,"62835135j":3,"6331137j":3,"77827941e":3,"aur\u00e9li":2,"boolean":9,"case":[1,2,10,20],"class":[1,2,3,5,8,10,13,23],"default":[2,3,4,5,8,9,10,20],"export":[0,2,5,7,14,20,24],"float":[2,5,8,10],"function":[1,2,3,4,5,6,7,8,9,10,15,18,20,22,23,24],"import":[0,1,2,3,8,10,15,20,21,24],"int":[1,2,5,8],"j\u00fclich":5,"new":[8,10,20],"r\u00e4ker":2,"return":[1,2,3,5,7,8,9,10,12,20,21,23],"switch":[1,2,5,10],"true":[1,2,3,5,8,9,10,12,13,14,16],"try":[2,5,10],"while":[18,24],AND:[2,5],Axes:8,EIS:16,For:[1,2,8,10,19],IDs:10,NOT:10,RES:5,That:[10,20],The:[1,2,3,5,6,8,10,14,15,16,18,20,22,24],There:15,USE:10,Use:[1,2,5,10],Used:8,Useful:10,Will:[3,4],With:5,__name__:10,_examples_jupyt:17,_examples_python:17,_import_bin:[2,5],_plot:3,_std:5,abem:5,abm:6,abmn:[1,2,5,12,14],abmnr:2,abort:9,abov:[5,8,10,22],abs:1,absolut:[1,5],access:[2,14],accord:[2,5,10],account:[8,10,20],across:[18,20,24],act:5,actual:[2,8],add:[1,2,3,5],add_ax:10,add_dat_fil:5,add_fil:5,add_to_config:1,added:[1,2,10,20],addit:[2,3,4,9],admit:6,advanc:[18,24],advantag:20,affect:[2,10],after:[1,2,3,5,10],again:2,against:[10,14,15],aim:[18,24],all:[1,2,3,4,5,8,10,12,14,15,16,17,22,23],allow:[3,10,15,23],along:8,alreadi:1,als:22,also:[1,2,5,6,8,10,12,20],altern:21,alwai:[1,2,5,22],analysi:[18,20,24],analyz:[10,18,24],ander:2,ani:[8,10,18,20,21,24],anoth:[2,3],appar:[10,20],append_doc_of:2,appli:[2,5,6,10,14,18,24],applic:2,apply_correction_factor:[5,6,10],apply_k:[10,11,12,14,16],appropri:5,arang:[1,8],arbitrarili:20,arctan2:6,area:8,arrai:[1,3,4,6,8,10],arrrai:10,articl:[14,15],artist:10,as3:6,ascii:4,aspect:[10,20],ass:2,assess:8,assign:[2,10,11,12,14,15,16],assign_norrec_diff:10,assign_norrec_to_df:[10,14],associ:20,assum:[2,5,8],attach:[10,15],attribut:[1,2],auken:2,author:2,automat:9,avail:[2,7,20,23],averag:[2,6,10],average_repetit:10,avoid:10,ax1:[8,10],ax2:8,axes:[2,8,10,14,16],axi:[3,8],back:[3,5],base:[1,2,3,10],basic:[10,15],becaus:6,becom:[2,10],befor:[1,5,14],before_curr:1,begin:22,belong:2,below:[3,10],bert:[0,2,18],best:24,between:[1,2,5,6,8,10,18,24],bin:[2,5,12],binari:[5,10,23],binlei:2,biogeosci:[5,6,10],bit:16,board:[10,17],bool:[1,2,3,4,5,8,10],both:[1,8],bridg:[18,24],bug:18,build:9,built:[5,10,15,23],cabl:[2,5],calcul:2,calibr:6,call:[1,5,6,10,20],can:[1,3,4,8,10,12,14,15,20,21,22,23],cannot:[8,10],capabl:24,care:20,caus:[16,22],cb1:10,cb_po:10,cblabel:8,cbmax:8,cbmin:8,ccomplex:3,cdot:[1,3],center:5,certain:8,cexp:5,chain:3,chang:[2,10],channel:6,chargeabl:20,check:[2,5,6,10,17],check_datafram:2,check_from_funct:3,check_meas_num:[2,5],check_resistor_board_measur:[10,15],check_to_funct:3,choic:5,choos:12,chosen:10,christiansen:2,cim:3,classic:[14,15],classmethod:3,clear_config:1,click:[11,12,13,14,15,16,19],clone:25,close:9,cmap:10,cmax:3,cmin:3,cni:6,cnu:6,code:[3,4,5,8,9,10,11,12,13,14,15,16,17,18,24],col:8,cole:2,color:[8,10],colorbar:[8,10],colorbarbas:10,colorcod:8,column:[1,2,4,5,6,7,8,10,12,14,15,16,22],com:25,command:10,common:[5,18,24],commonli:1,commun:[18,24],compar:[3,8],compat:[4,14,18,24],complex:[2,5,20],compris:3,comput:[2,6,10,14,15,16],compute_correction_factor:10,compute_k:10,compute_k_analyt:[2,10,11,12,14,16],compute_k_numer:10,compute_norrec_differ:10,compute_quadrupol:5,compute_reciprocal_error:2,conda:25,conduct:[3,10],config:[0,4,5,6,8,10,14],config_fil:[5,6],configfil:[2,14],configmanag:0,configs_large_dipoles_norrec:14,configs_uniqu:1,configur:[1,2,4,5,6,8,10,14,15,20],conform:[4,5],connector:[10,15],consecut:[2,5],consist:[5,20],constant:2,constrain:2,construct:[5,14,15],contact:5,contactresist:5,contain:[0,1,3,5,6,7,8,10,11,13,14,15,16,21,22],contamin:2,content:10,context:2,contribut:24,conveni:[2,7],convers:[2,3,5],convert:[0,1,2,5],convert_electrod:5,coordin:[8,10],copi:[2,10],copper:2,core:[13,14,21],corner:8,corr_data:10,correct:[5,6,7,8,9,10],correction_factor:10,correction_fil:[2,5,6,10],correctli:2,correspond:[1,2,5,7,8],could:[2,5],count:13,counter:2,counterpart:[10,15,22],coverag:1,cpa:2,crconfig:1,cre:3,creat:[1,2,4,8,10,13,16,20],create_plot:10,crmod:[1,4,5,10],crt:5,crt_grid:8,crt_result:14,crtomo:[0,1,2,8,10,14,18],csv:[2,5],ctype:8,cumbersom:16,curat:[2,5,20],current:[1,2,5,6,8,14,15,20,24,25],curv:[2,12],cyan:8,dat:[1,2,5,10,14,15],data:[0,1,2,3,4,5,6,7,8,9,13,18,24],data_10hz:16,data_eit40_v_ez:14,data_eit_fzj_check:15,data_emd_3p:5,data_emd_4p:5,data_fil:10,data_filenam:5,data_md_raw:5,data_norm:[11,12],data_prefix:[2,5],data_radic_256c:16,data_reciproc:[11,12],data_syscal_ert:11,data_syscal_ip:12,datacontainerert:1,datafram:[2,4,5,8,10,13,20,23],dataframegroupbi:14,dataobj:8,dataset:[2,5,8,10],datefram:[2,10],datetim:[2,5],dc2dinvr:5,dd_merg:8,deal:20,debug:[2,5],decai:[2,12],decay_curv:12,declar:20,deem:[2,5],def:8,defin:[6,7,8],delet:[1,3],delta:6,denot:[2,5,10,14,15],depend:[10,25],deprec:21,depreci:10,deriv:20,descend:2,describ:10,descript:[5,20],detail:[5,6],detect:12,determin:[1,3,8,10,16],develop:[5,14,15,25],deviat:[5,6],devic:[4,5,18,24],df_all:5,df_emd:5,df_new:10,dict:[3,5,8,10],dictionari:[3,5,8],did:[2,22],diff:2,diff_list:10,differ:[2,4,5,6,8,10,15,22],dimens:[2,3,8],dipdip_skip0_nor:16,dipdip_skip0_rec:16,dipol:[1,5,8,10],dir:10,directli:[2,4,8,10,14],directori:[2,4,5,10],disadvantag:20,disk:12,distanc:[1,2,5,8,10],distribut:[14,15,20],do_not_satur:8,doc:21,docstr:[9,10],document:[9,18,21],doe:[2,5,8,12],doesnotexist:10,doi:[2,10,18],domain:[2,20],don:[2,5,6,8],done:[10,14,22],down:[5,10],download:[2,5,10,11,12,13,14,15,16,17],download_data:[2,10],dpi:14,drake:2,dtype:[3,13],due:10,dummi:9,dump:12,duplic:[1,10],dure:[9,10],e213:2,e225:2,each:[1,2,4,5,6,8,10,14,15,18,20,22,23,24],easili:20,edf:7,edfk:11,eis:[0,2,13,16],eis_plot:16,eit160:[0,5,17,18],eit40:[0,5,17,18],eit:[2,5,6,14,17],eit_data_mnu0:[5,14,15],eit_fzj:0,eit_fzj_resistor_check:15,eit_fzj_util:[0,15],eit_version_2010:0,eit_version_2013:0,eit_version_2017:0,eit_version_2018a:0,either:[3,10],elec:10,elec_fil:10,electr:[2,4,10,15,20],electrod:[1,2,4,5,6,8,10,11,12,14,15,16,23],electrode_posit:[2,20],elem:10,elem_fil:10,element:10,els:12,emb:12,emd:[5,6],emit:[2,21],emphasi:[18,24],enabl:[2,5,10],encount:24,end:[3,5],entri:[1,10],epsilon:2,equal:2,equat:[2,5,10],erro:2,error:[2,4,21],ert:[0,1,5,8],ertcontain:[2,8],ertcontainer_nr:8,ertobj:8,esben:2,etc:8,evalu:2,everyth:9,exact:[2,20],exampl:[0,1,2,3,5,8,9,11,12,13,14,15,16,18,22,24],except:10,excit:6,exclud:1,execut:[10,14],exist:[1,2,4,10,15],exit:[9,12],exp:[3,16],expect:[8,10,15],experiment:20,explan:[5,18],export_bert:[2,4],export_pygimli:2,express:22,extend:[2,5],extra:8,extra_dim:8,extract:[1,2,5,14,15],facil:2,facilit:7,fact:22,factor:[2,3,5,6,10,14,16,20],fail:9,fairli:18,fals:[1,2,3,4,5,8,9,10,22],featur:18,feed:3,few:[8,10],fiandaca:2,fid:[2,12],field:2,fig:[2,3,8,10,13,14,15,16],figs_dict:8,figsiz:[14,16],figur:[2,3,8,10,12,15],file:[1,2,3,4,5,6,7,9,10,12,13,14,15,23,25],filenam:[1,2,3,4,5,6,12,13,14],filetyp:3,fill:1,filter:[2,10,14,16],filter_act:2,filter_config_typ:0,filter_incomplete_spectra:2,filter_queri:2,filter_skip:5,find:[2,10],finit:10,first:[1,2,3,5,6,8,10,20],fix:[2,10,16],fix_sign_with_k:[0,2,12,14,16],fixedloc:10,fixk:12,flat:[14,16],flatten:3,flavor:3,flimit:2,fmax:2,fmin:2,follow:[2,5,10,20,22,23],form:[1,18,24],format:[1,2,3,4,5,6,14,16,23],formula:3,fortran:3,forward:[2,18],found:10,four:[1,10,14,15,20],fourth:5,frac:2,frame:[2,5,8,10,13],frame_on:10,frequenc:[2,3,4,5,6,8,13,14,16,20],frequency_fil:[2,5],from:[1,2,3,5,6,8,10,13,14,17,18,20,23,24,25],from_ccomplex:3,from_cmag_cpha:3,from_cre_cim:3,from_cre_cmim:3,from_lnrmag_rpha:3,from_log10rmag_rpha:3,from_rcomplex:3,from_rmag_rpha:3,from_rre_rim:3,from_rre_rmim:3,front:1,full:[1,2,5,10,11,12,13,14,15,16,19],fun:2,func:3,further:[2,5],futur:[16,20,21],futurewarn:21,fzj:[2,5,6,17,18],galleri:[11,12,13,14,15,16,17],gap:[18,24],gazoti:2,gen_all_current_dipol:1,gen_all_voltages_for_inject:1,gen_configs_permut:1,gen_dipole_dipol:1,gen_geometric_factors_analyt:2,gen_gradi:1,gen_reciproc:1,gen_schlumberg:1,gen_wenn:1,gener:[1,2,3,4,5,8,11,12,13,14,15,16,17],generic_magpha_to_reim:3,geo2011:2,geoelectr:[18,24],geom_fac_crtomo:0,geometr:[2,3,10,14,16,20],geometri:10,geometric_factor:[0,2,11,12,14,16],geomk:12,geophys:[2,18,24,25],geotom:0,get:24,get_default_set:10,get_group:[14,16],get_label:[3,7],get_mnu0_data:5,get_nam:2,get_spectrum:2,get_test_df:[2,10],get_test_df_advanc:10,get_xy_simple_dipole_dipol:10,getattr:21,gianluca:2,git:25,github:25,given:[1,2,3,5,7,8,10,20,23],glob:[2,5],global:20,going:8,gradient:1,graphic:8,grid:[2,8],ground:[5,14,15],group:[2,4,8,16],groupbi:[14,16],grouper:14,hack:12,half:[1,2,10],handl:5,handler:2,hardcod:3,hardwar:15,has:20,have:[1,10,20,22,24],help:18,helper:10,helper_funct:0,here:[1,2,3,5,10,11,12,13,14,15,16,19,20,21],herebi:8,highli:[18,24],hist_filtered_f_:14,hist_raw_f_:14,histogram:[0,11,14,16],hists_filt:14,hists_raw:14,hold:[1,2,3,8,10],home:21,homogen:[2,10],honor:2,how:[1,14],howev:[7,8],hspace:16,html:21,http:[2,10,14,15,21,25],human:[18,24],hundr:20,iab:11,idea:24,identifi:[6,7,10],ids:[1,2,11,12,14,15,16],ignor:[1,8],ignore_crossed_dipol:1,ii3:6,iloc:16,imag:20,imaginari:[3,5],impact:22,imped:[2,3,5,6,20],implement:2,impli:[1,20],import_:23,import_bert:2,import_bin:5,import_crtomo:2,import_eit_fzj:[2,14],import_medusa_data:6,import_ohm:5,import_pygimli:2,import_sip04:[2,13],import_sip04_data:5,import_sip04_data_al:5,import_sip256c:[2,16],import_syscal_bin:[2,12],import_syscal_txt:[2,11],import_txt:5,importconstruct:2,importerload:2,improv:[5,16],includ:[1,3,8],increas:5,incred:16,increment:[1,5],index:[10,12,21],index_nor:[2,12],index_rec:[2,12],indic:[1,2,5,10],individu:[2,8,18,24],induc:[2,20],inequ:22,infer:[2,3,5,8,10],info:[2,10],inform:[2,5,6,10],inher:20,inherit:2,initi:[3,14],inject:[1,2,5,6,14,15],injections_raw:1,inplac:2,input1:3,input2:3,input:[2,3,5],input_format:3,insid:2,instal:10,instanc:[1,8],instead:[1,8],instrument:[2,4,5],integ:5,intend:2,interest:[5,24],interfac:[18,20,24],intern:18,interpret:8,introduc:23,invers:[2,4,18,24],involv:1,iop:[14,15],iopscienc:[14,15],ipynb:[11,12,13,14,15,16],ipython:12,iri:[2,4,5],iris_syscal_pro:0,iris_syscal_pro_binari:[2,5],irregular:10,is3:6,isdir:14,isfil:12,issu:18,item:[14,16],iter:[2,8],its:[2,10,15],itself:[2,5,7,22],jan:2,jet_r:10,journal:[18,24],jump:[2,5,12],jupyt:[11,12,13,14,15,16,17],just:[2,8,22],keep:[2,18,20,24],keep_dir:10,kei:[2,5,7,8,10,11,14,16],kemna:[2,4,5,6,10],kerosen:2,keyerror:21,keys_diff:10,keys_mean:10,keyword:10,know:20,known:[1,10,15],kwarg:[2,3,4,5,8],kx2:1,kx4:1,label:[3,7,8,10,21],labrecqu:2,laps:[18,24],larg:12,largest:5,last:3,later:[2,22],latest:25,latex:[3,7,10],latter:[18,24],leakag:6,least:2,left:[2,8],legaci:[0,5],length:1,lib:21,librari:[18,24],licens:[18,24],lie:1,like:21,limit:[3,8],line:[5,8,10,14,15],linear:8,list:[1,2,3,8,10,21],listhandl:2,listlik:21,load:[1,2,5,8,12,22],load_config:1,load_crmod_config:1,load_crmod_volt:1,load_mod_fil:5,load_seit_data:5,loc:[2,21],locat:[2,5,10,20],log10:[8,16],log10plot:8,log:[2,18,24],log_list:2,logdatachang:2,logger:[0,2],loggingclass:2,logic:20,look:[18,24],loos:22,lot:[5,20],lower:[8,20],made:8,mag:3,magnitud:[1,3,5],main:[0,10,19],make:23,makedir:14,manag:[1,2,3,20,23],mani:1,mat:[2,5,6,13,14,15],mat_filenam:6,match:[2,5],materi:3,mathml:3,matlab:5,matplot:8,matplotlib:[2,3,8,9,10,15],matter:12,max:[2,13],maximum:[2,5,8],mcf:6,mea:3,mean:[1,2,5,6,13,23],meaning:7,meant:2,measur:[1,2,3,4,5,6,8,10,14,15,18,20,24],measurements2:8,measuremnt:1,medusa:[2,6],merg:[1,8],mesh:10,meshgrid:8,mesur:20,meta:[14,15],metadata:20,method:[1,2,3,9],mid:1,mimic:10,min:[2,13],minim:20,minimum:8,minut:[14,16],misc:10,miss:21,mit:[18,24],mlnerallzatlont:2,mnu0:[6,10],mod:[5,10],mode:20,model:[2,4,10],modul:[0,19,21,23],moment:[2,5,10,16],monitor:18,more:[1,2,5,8,10],most:2,mostli:18,mpl:[0,3],mpl_get_cb_bound_below_plot:10,mpl_get_cb_bound_next_to_plot:10,mrad:[5,20],multi_sip_respons:3,multipl:[2,3,10,15,23],multiplex:5,multipli:3,multitud:[18,24],must:[1,2,3,5,10,20,23],mweigand:21,na1:6,na2:6,name:[2,7,8,10,20,21],nan:1,natur:[2,5],nax4:1,ndarrai:[1,4,5,8,10],necessari:[6,10,23],need:[5,6,10,20],neg:[10,16],nelson:2,neumann:10,new_config:1,new_kei:21,next:[3,6,10],nice:3,nmu0:5,nni:6,nnx1:1,nnx4:1,nocb:8,node:20,noel:1,non:1,none:[1,2,3,5,8,9,10,23],nor:[4,12,14],nor_indic:1,norm:10,normal:[1,2,4,8,10,12,14,22],norrec:[0,2,4,12,14,16],nosetest:3,note:[2,5,6,8,10,12,14],notebook:[11,12,13,14,15,16,17],notimplementederror:2,nov:18,now:[2,14,15],nr_electrod:[1,8],nr_id:[2,12,16],nr_of_config:1,nr_of_electrod:1,nr_voltage_dipol:1,nrx1:1,nrx4:1,number:[1,2,5,6,8,11,12,16],numer:10,numpi:[1,3,4,5,6,8,10,16],nx2:1,nx4:[1,4,5,8,10],nx5:10,object:[1,2,3,8,10,12,14,23],observ:2,offer:[18,24],ohm:[2,5,10,20],ohmic:[10,15],oject:8,onc:14,one:[1,2,3,5,8,10,12,14,15,20],one_spectrum:3,ones:1,onli:[1,2,3,5,6,8,10,12,14,15,19,20],only_same_dipole_length:1,only_typ:10,onlydoctest:9,open:[2,6,12,18,24],oper:22,opt_import:10,optim:2,option:[1,2,3,4,5,8,9,10,20,25],order:[10,21],org:[2,10,14,15,21,25],orient:10,other:[4,5,10],otherwis:[1,7,8,10,20],out:[1,5,11,12,13,14,15,16],outcom:15,outdir:[2,10],outlin:10,output1:3,output2:3,output:[1,2,3,4,5,10],output_format:3,outsid:8,over:2,overal:8,overcom:22,overview:[3,19],overwrit:10,packag:[19,21],pad:1,pair:[2,10,14],panda:[2,4,5,8,10,13,14,20,21,23],paper:10,paramet:[1,2,3,4,5,6,8,9,10,12],parse_radic_fil:5,parse_read:5,part:[2,3,5,10],particular:[18,24],pass:[8,15,21],path:[1,2,5,6,10,12,14],pcolormesh:8,pdf:[3,8,10,13,14,15,16],percaccept:2,percent:2,perform:2,permiss:[18,24],permut:1,pfile:12,pha:3,phase:[1,3,5,6,20],physic:7,pickl:12,pinpoint:21,pip:25,pipe:3,pipelin:6,place:2,platform:[18,24],pleas:[2,5,24],plot:[0,2,7,8,10,11,12,13,14,15,16],plot_all_spectra:2,plot_cim:3,plot_cr:3,plot_decay_curv:[2,12],plot_eit_fzj:14,plot_eit_fzj_check:15,plot_filenam:2,plot_histogram:[8,11],plot_histograms_extra_dim:[8,14],plot_histograms_it_extra_dim:8,plot_kei:8,plot_ps_extra:8,plot_pseudodepth:8,plot_pseudosect:8,plot_pseudosection_type2:[8,14,16],plot_quadpole_evolut:8,plot_radic_sip256c:16,plot_rawdataplot:8,plot_rmag:3,plot_rpha:3,plot_sip04:13,plot_syscal_dc:11,plot_syscal_ip:12,plots2d:0,plotter:[0,11,14,16],plt:[8,10,14,16],plt_obj:10,pmax:3,pmin:3,png:[2,3,8,10,12,14],point:[1,2,5,6,10,12,14,15,22,23],polar:[2,20],pool:1,porphyri:2,posit:[1,2,5,8,10,21,23],possibl:[1,5,8,23],postprocess:5,potenti:[1,5,6,14,15,20],pprofil:12,precompute_valu:3,prepend_doc_of:2,present:[2,5],prevent:12,previor:1,previous:[2,5,10],print:[1,10,12,13,14],print_data_journ:2,print_log:2,print_stat:12,prioriti:2,pro:[2,4,5],problem:[21,24],process:[1,2,3,5,10,18,20,24],produc:[1,2,5,8],profil:12,program:[4,5,10],progress:[18,24],project:25,properli:5,properti:3,provid:[1,2,3,5,6,8,10,12,18,20,22,23,24],pseudo:[5,6,10],pseudo_posit:0,pseudodepth:8,pseudoplot:[0,14,16],pseudosect:[8,14,16],pseudosections_eit40:14,pseudosections_rad:16,ptype:3,purpos:[9,10],pybert:1,pydata:21,pygimli:[1,4,5],pylab:[10,14,16],pypi:25,pyplot:[8,10],python3:21,python:[10,11,12,13,14,15,16,17,18,24,25],quadpol:[1,8,20],quadpole_data:14,quadrant:6,quadrupol:[1,2,6,8,14],quadrupole_mod:5,queri:[2,14,16,22],question:6,quick:8,r_n:2,r_r:2,radic:[2,5,17,18],radic_sip256c:0,rais:[2,21],random:8,rang:8,ratio:10,raw:[8,14,16],rawdata:8,rcomplex:[3,13,16],rcparam:[3,10],rdiff:22,read:[1,2,4,5,6,16],readabl:[18,24],reading_block:5,reading_config:5,real:[3,5,8],realiz:[18,24],rec:[4,12,16],rec_indic:1,reciproc:[1,2,3,4,5,8,10,11,12,14,15,16,22],recogn:2,record:2,red:8,reda:[11,12,13,14,15,16,19,20,22,23,25],redaex:14,redafixk:[14,16],redahist:14,redak:[14,16],reduce_duplicate_frequ:2,redund:5,refer:[2,5,10],referenc_data_fil:10,reference_data_fil:10,regist:10,reindex:21,rel:1,relat:[5,7,8],releas:25,relev:5,remain:[10,14],remov:[1,2,3,10,12],remove_dupl:1,remove_frequ:[2,14],renam:[2,5],renumb:[11,12],repeat:10,repetit:[5,6],report:18,repositori:10,reproduc:[18,24],request:[2,3],requir:[2,5,6,7,10,14,15,25],requiredfor:10,res2dinv:[0,18],res:16,research:5,resist:[2,3,5,10,15,20],resistor:[6,10,15],resistor_check:15,respect:8,respons:3,restrict:8,result:[2,3,5,6,10,14,15],retain:[2,22,23],retriev:[2,5],return_3p:5,return_fig:[2,3,12,13,16],return_indic:1,review:22,rhizotron:10,rho:[3,10],rho_a:[2,10,11,14],rhoa:20,right:[2,8,10,16],rmag:3,robust:18,roll:8,root:2,row:[2,5,6,12,22],rpha:[2,3,5,10,13,14,16,20],rudimentari:5,rule:1,run:[3,5,9,14,16],same:[1,8],satur:8,save:[2,3,4,12],save_block_to_crt:4,savefig:[14,15,16],scatter:2,scatter_norrec:2,scheme:[1,2],schlumberg:[1,8,10],scientif:[18,24],script:[14,16],search:10,second:[1,5,6,14,16,20],section:[21,24],see:[3,5,6,10,21],seit:[0,4,5,14,16,22],select:[1,10],selection_mod:5,selector:5,self:[1,21],sens:20,sensor:5,separ:[2,4,6,8,10,14,15,20],set:[1,2,3,4,5,7,8,10,18,20,24],set_nam:2,set_titl:[8,14,16],set_xlim:3,setup:[2,3,5,6,8,10,25],setup_logg:[2,7],shape:8,sharei:[14,16],sharex:[14,16],shift:[5,16],should:[5,6,10,18,22,23],show:[8,9,13,14],shown:[19,22],shunt:[5,6],shuntresist:5,sign:[2,10,16],similar:21,simpl:[10,23],simplefilt:21,simplifi:[7,20],singl:6,sink_nod:10,sip04:[0,2,13],sip04_fs_01:2,sip04_fs_06:2,sip256c:[2,5,17],sip:[0,3,5,16,17,18],sip_data:[5,13],sip_dataa:2,sip_respons:[2,3,13,16],sipdata:5,site:21,sitegold:2,skip:[1,5,8],skipc:1,skipv:1,slightli:[5,6],slow:[2,16,18],smaller:[2,5],smallest:[1,2,5],snippet:5,softwar:15,some:[3,10,20,22,23],someth:10,sometim:[5,22],somewhat:16,soon:7,sorri:16,sort:[2,5,8,10,14],sort_valu:16,sound:1,sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,24],space:[2,4,5,8,10,11,12,14,15,16],spatial:[8,20],special:10,specif:[2,5],specifi:[2,3,10,12],spectra:[2,3,16],spectral:[2,20],spectrum:[2,3,13,16],spectrum_nor:[2,16],spectrum_rec:[2,16],sphinx:[11,12,13,14,15,16,17],split:[1,3],split_data:3,split_into_normal_and_reciproc:1,spread:[10,14,15],spreadsheet:[2,5],squeez:3,stabl:21,standard:[3,4,5,6],start:23,start_skip:1,state:[2,20],statement:[2,10],std:[2,13],step:[1,6,8,18,20,24],stepc:1,steplength:1,stepv:1,still:16,store:[1,2,4,5,10,20],store_error:4,str:[2,10],string:[1,2,3,4,5,6,8,9,10],structur:[6,10],style:[3,5],sub_filt:2,subclass:2,subdata:16,subdata_rec:16,submodul:[0,19],subplot:[8,10,14,16],subplots_adjust:[10,16],subqueri:[2,8],subsequ:[1,2,5,8,10,12],subset:2,suitabl:[2,3,5,10],sum:8,summari:[13,14,15,16],superposit:[6,14,15],suppli:8,support:[6,14,15,20],suppos:21,surfac:8,swap:[2,10],symmetri:8,syscal:[0,2,5,17,18],syscal_save_to_config_txt:4,system:[2,5,6,10,14,15,18,24],tab:[10,14,15],take:[1,2,8,10,20],taken:10,target:[9,20],tdip:[0,12],teardown:3,temp_1:5,temp_2:5,temperatur:5,tempfil:2,temporarydirectori:2,test2:10,test:[0,2,3,5,8,10,17,18,24],test_convert:0,test_fix_sign_with_k:10,test_from_cmag_cpha:3,test_from_cre_cim:3,test_from_cre_cmim:3,test_from_rmag_rpha:3,test_from_rre_rim:3,test_from_rre_rmim:3,test_get_unique_identifi:8,test_input_styl:3,test_norrec_assignments1:10,test_to_cmag_cpha:3,test_to_cre_cim:3,test_to_cre_mim:3,test_to_rre_rim:3,testclass_input_styl:3,testclass_test_convert:3,text:[2,5,10,14,15,18,23],than:[2,5,8],thei:[9,23],them:[2,7],therefor:8,thi:[1,2,3,5,6,7,8,10,12,14,15,16,20,21,22,23],think:6,third:5,those:[2,3,5,10],thousand:20,three:[2,3,5,6,23],threshold:8,through:3,thu:[1,2,3,10,15],ticker:10,tight_layout:[8,14],time:[2,6,8,12,14,16,18,20,24],time_seri:0,timestep:[2,5,8],tip:21,titl:3,to_ccomplex:3,to_cmag_cpha:3,to_complex:3,to_cr:2,to_cre_cim:3,to_cre_cmim:3,to_ip:2,to_lnrmag_rpha:3,to_log10rmag_rpha:3,to_one_lin:3,to_pg_schem:1,to_rcomplex:3,to_rmag_rpha:3,to_rre_rim:3,to_rre_rmim:3,todo:[2,5,16,20],tomograph:6,tomographi:[2,20],tool:8,top:16,topograhi:20,topographi:[2,5,10,20,23],total:[1,14,16],touch:24,toward:[5,10,15,18],track:[18,22,24],transfer:[5,6],transform:[5,10],treat:[2,5],triangl:8,true_conduct:10,tupl:8,two:[3,6,10,14,15],txt:[11,25],type:[2,3,8,10,13,18,20],ubonn:25,under:[10,18,24],unifi:[2,4,5,18,20,24],uniqu:1,unit:0,unix:10,unnecessari:3,untest:18,unzip:10,update_tick:10,upon:[5,23],upper:8,ups:10,usag:[5,23],use:[1,2,3,4,5,6,10,20,21,22,23],use_latex:10,used:[1,2,3,4,5,6,8,10,18,20,24],useful:[2,20],uses:[14,15,20],using:[2,3,4,5,6,10,14,15,22,24],usual:[1,2,3,5,7,8,14,15,20],util:[0,2,9,11,12,14,15,16],valid:[10,15,22],valu:[1,2,3,5,6,8,10,13,16,20,22],van:2,variabl:[10,20,23],varianc:6,variat:[10,15,23],variou:[3,8,10,14,20,21],vaue:8,verbos:[2,5,9],veri:5,version:[2,7,8,14,15,25],vertic:10,vest:2,via:6,vienna:18,virtualenv:21,visual:[8,15,18,24],vmax:10,vmin:10,vmn:[2,10],volt:[1,5],volt_01_0:5,volt_:[2,5],voltag:[1,5,6,8],voorhi:2,vskip:1,vstack:1,vstep:1,wagner:18,wai:[2,7,10,22,24],want:[2,7,22],warn:[2,10,12],weigand:[5,6,10,18],welcom:18,well:[1,2,9],wenner:[1,8,10],were:[2,5,10],what:[2,10],whatev:2,when:[2,9],where:[1,2,5,21],whether:2,which:[1,3,4,5,8,10,14,15,18,24],whole:10,window:9,without:20,work:[6,7,18,24],workshop:18,wrapper:2,write:[1,4,10],write_config:1,write_crmod_config:1,write_crmod_fil:5,write_crmod_volt:1,write_files_to_directori:[2,4,5,14],written:[4,10],wspace:16,x_a:[2,5],x_n:[2,5],xlabel:8,xmax:3,xmin:3,xyz:1,yet:[2,10],yg1:6,yg2:6,ylabel:8,you:[2,8,10,12,21,24],your:24,zenodo:18,zero:1,zg3:6,zimmermann:[14,15],zip:[14,16,17],zm_ab:5,zm_absstd:5,zm_m:5,zm_mab:5,zm_mim:5,zm_mphi:5,zm_mre:5,zm_phi:5,zm_phistd:5,zt3:6,zt_1:5,zt_2:5,zt_3:5},titles:["reda package","reda.configs package","reda.containers package","reda.eis package","reda.exporters package","reda.importers package","reda.importers.legacy package","reda.main package","reda.plotters package","reda.testing package","reda.utils package","Importing Syscal ERT data","Importing Syscal IP data","SIP-04 Import","Importing EIT40/EIT160 data","Checking FZJ-EIT data from a test board","Importing Radic SIP256c data","Examples","About","API documentation","Data Containers","Debugging reda","Filtering Data","Data Importers","Welcome to the REDA documentation!","Installation","Test data"],titleterms:{"export":[4,18],"import":[5,6,11,12,13,14,16,17,18,23],about:18,api:19,basic:20,bert:[4,5],board:15,check:15,citat:18,column:20,config:1,configmanag:1,contain:[2,9,17,20],contribut:18,convert:3,crtomo:[4,5],data:[10,11,12,14,15,16,17,20,22,23,26],debug:21,develop:23,document:[19,24],eis:3,eit160:[6,14],eit40:[6,14],eit:15,eit_fzj:5,eit_fzj_util:10,eit_version_2010:5,eit_version_2013:5,eit_version_2017:5,eit_version_2018a:5,electrod:20,elev:21,ert:[2,11,17,20],exampl:[10,17],except:21,filter:22,filter_config_typ:10,fix_sign_with_k:10,from:15,fzj:15,geom_fac_crtomo:10,geometric_factor:10,geotom:5,helper_funct:10,histogram:8,imped:17,instal:25,intern:23,introduct:23,iris_syscal_pro:5,legaci:6,logger:7,main:7,modul:[1,2,3,4,5,6,7,8,9,10],mpl:10,nan:22,norrec:10,number:20,packag:[0,1,2,3,4,5,6,7,8,9,10],plot:3,plots2d:8,plotter:8,posit:20,pseudo_posit:10,pseudoplot:8,radic:16,radic_sip256c:5,reda:[0,1,2,3,4,5,6,7,8,9,10,18,21,24],requir:20,res2dinv:5,seit:[2,17,20],sip04:[5,17],sip256c:16,sip:[2,13,20],spectral:17,statu:18,structur:23,submodul:[1,2,3,4,5,6,7,8,9,10],subpackag:[0,5],syscal:[4,11,12],tdip:[2,20],test:[9,15,26],test_convert:3,time_seri:8,unit:[3,7],usag:17,util:10,warn:21,welcom:24,work:22}})