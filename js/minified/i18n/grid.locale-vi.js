!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","../grid.base"],a):a(jQuery)}(function(a){a.jgrid=a.jgrid||{},a.jgrid.hasOwnProperty("regional")||(a.jgrid.regional=[]),a.jgrid.regional.vi={defaults:{recordtext:"View {0} - {1} of {2}",emptyrecords:"Không có dữ liệu",loadtext:"Đang nạp dữ liệu...",pgtext:"Trang {0} trong tổng số {1}",pgfirst:"First Page",pglast:"Last Page",pgnext:"Next Page",pgprev:"Previous Page",pgrecs:"Records per Page",showhide:"Toggle Expand Collapse Grid"},search:{caption:"Tìm kiếm...",Find:"Tìm",Reset:"Khởi tạo lại",odata:[{oper:"eq",text:"bằng"},{oper:"ne",text:"không bằng"},{oper:"lt",text:"bé hơn"},{oper:"le",text:"bé hơn hoặc bằng"},{oper:"gt",text:"lớn hơn"},{oper:"ge",text:"lớn hơn hoặc bằng"},{oper:"bw",text:"bắt đầu với"},{oper:"bn",text:"không bắt đầu với"},{oper:"in",text:"trong"},{oper:"ni",text:"không nằm trong"},{oper:"ew",text:"kết thúc với"},{oper:"en",text:"không kết thúc với"},{oper:"cn",text:"chứa"},{oper:"nc",text:"không chứa"},{oper:"nu",text:"is null"},{oper:"nn",text:"is not null"}],groupOps:[{op:"VÀ",text:"tất cả"},{op:"HOẶC",text:"bất kỳ"}],operandTitle:"Click to select search operation.",resetTitle:"Reset Search Value"},edit:{addCaption:"Thêm bản ghi",editCaption:"Sửa bản ghi",bSubmit:"Gửi",bCancel:"Hủy bỏ",bClose:"Đóng",saveData:"Dữ liệu đã thay đổi! Có lưu thay đổi không?",bYes:"Có",bNo:"Không",bExit:"Hủy bỏ",msg:{required:"Trường dữ liệu bắt buộc có",number:"Hãy điền đúng số",minValue:"giá trị phải lớn hơn hoặc bằng với ",maxValue:"giá trị phải bé hơn hoặc bằng",email:"không phải là một email đúng",integer:"Hãy điền đúng số nguyên",date:"Hãy điền đúng ngày tháng",url:"không phải là URL. Khởi đầu bắt buộc là ('http://' hoặc 'https://')",nodefined:" chưa được định nghĩa!",novalue:" giá trị trả về bắt buộc phải có!",customarray:"Hàm nên trả về một mảng!",customfcheck:"Custom function should be present in case of custom checking!"}},view:{caption:"Xem bản ghi",bClose:"Đóng"},del:{caption:"Xóa",msg:"Xóa bản ghi đã chọn?",bSubmit:"Xóa",bCancel:"Hủy bỏ"},nav:{edittext:"",edittitle:"Sửa dòng đã chọn",addtext:"",addtitle:"Thêm mới 1 dòng",deltext:"",deltitle:"Xóa dòng đã chọn",searchtext:"",searchtitle:"Tìm bản ghi",refreshtext:"",refreshtitle:"Nạp lại lưới",alertcap:"Cảnh báo",alerttext:"Hãy chọn một dòng",viewtext:"",viewtitle:"Xem dòng đã chọn",savetext:"",savetitle:"Save row",canceltext:"",canceltitle:"Cancel row editing"},col:{caption:"Chọn cột",bSubmit:"OK",bCancel:"Hủy bỏ"},errors:{errcap:"Lỗi",nourl:"không url được đặt",norecords:"Không có bản ghi để xử lý",model:"Chiều dài của colNames <> colModel!"},formatter:{integer:{thousandsSeparator:".",defaultValue:"0"},number:{decimalSeparator:",",thousandsSeparator:".",decimalPlaces:2,defaultValue:"0"},currency:{decimalSeparator:",",thousandsSeparator:".",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0"},date:{dayNames:["CN","T2","T3","T4","T5","T6","T7","Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"],monthNames:["Th1","Th2","Th3","Th4","Th5","Th6","Th7","Th8","Th9","Th10","Th11","Th12","Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng mười một","Tháng mười hai"],AmPm:["sáng","chiều","SÁNG","CHIỀU"],S:function(a){return 11>a||a>13?["st","nd","rd","th"][Math.min((a-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"n/j/Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:!1,userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"}}});