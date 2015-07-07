import 'dart:html';
import 'Helpers/JSONHelper.dart';
import 'Helpers/FormParser.dart';
import 'model/Person.dart';

void main() {

  /* JSON initializers from local db*/
  var db = new JSONHelper();

  var submit = querySelector('#btn_AddUser') as ButtonElement;
  submit.onClick.listen(fn_AddUser);

}

void fn_AddUser(e) {
  var user_form = new FormParser('#frm_new_user');
  var data = user_form.ParseData();
  var person = new Person(data);
}

