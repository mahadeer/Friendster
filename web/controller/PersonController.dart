import '../Business/PersonHelper.dart';
import 'dart:async';

class PersonController {
  static PersonHelper _pHelper = new PersonHelper();

  static Future GetPersonList(String url) {
    return _pHelper.GetPersonList(url);
  }

  static Future GetPerson(int personId) {

  }

  static Future AddPerson(String url, Map newPerson) {
   return  _pHelper.AddPerson(url, newPerson);
  }

  static Future UpdatePerson(Map updatePerson) {

  }

  static Future DeletePerson(int personId) {

  }
}
