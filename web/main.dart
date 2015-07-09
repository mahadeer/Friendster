import 'dart:html';
import 'dart:convert';
import 'Helpers/JSONHelper.dart';
import 'Helpers/FormParser.dart';
import 'model/Person.dart';

void main() {

  /* JSON initializers from local db*/
  JSONHelper.FetchData().then(fn_LoadData);
  fn_BindEvents();
}

void fn_AddUser(e) {
  var user_form = new FormParser('#frm_new_user');
  var data = user_form.ParseData();
  var person = new Person(data);
}

void fn_BindEvents() {
  var submit = querySelector('#btn_AddUser') as ButtonElement;
  submit.onClick.listen(fn_AddUser);
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