import 'dart:html';
import 'dart:convert';
import 'Controller/PersonController.dart';
import 'Helpers/FormParser.dart';

var url = 'http://localhost:63342/Portfolio/web/data/data.json';
void main() {
  fn_BindEvents();
  fn_UpdateData();
}

void fn_UpdateData() {
  PersonController.GetPersonList(url)
    .then(fn_LoadData);
}

void fn_BindEvents() {
  var submit = querySelector('#btn_AddUser') as ButtonElement;
  submit.onClick.listen(fn_AddUser);
}

void fn_AddUser(e) {
  var user_form = new FormParser('#frm_new_user');
  var data = user_form.ParseData();
  PersonController.AddPerson(url, data["Person"]).then(fn_ReloadData);
}

void fn_ReloadData(val) {
  print(val);
  fn_UpdateData();
}

void fn_LoadData (String res) {
  Map data =JSON.decode(res);
  fn_GetFriends(data);
}

void fn_GetFriends (Map Response) {
  List<Map> Friends = new List<Map>();
  Friends = Response["Friends"];
  TableElement table = querySelector('#tbl_friendsList') as TableElement;
  var tBody = table.createTBody();
  for (Map _friend in Friends) {
    fn_CreateCellItem(_friend, tBody);
  }
}

void fn_CreateCellItem (Map _friend, TableSectionElement tBody) {
  TableRowElement newLine = tBody.insertRow(-1);
  newLine.insertCell(0).text = '${_friend["FirstName"]}, ${_friend["FamilyName"]}';
  newLine.insertCell(1).text = _friend["Sex"];
  newLine.insertCell(2).text = _friend["Country"];
}
