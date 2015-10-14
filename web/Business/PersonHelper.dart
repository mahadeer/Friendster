import 'dart:async';
import '../Helpers/JSONHelper.dart';
import '../Model/Person.dart';

class PersonHelper {
  PersonHelper() {
  }

  Future GetPersonList(String url) {
    /* JSON initializer from local file*/
    return JSONHelper.FetchData(url);
  }

  Future AddPerson(String url, Map newPerson) {
    return JSONHelper.Insert(url, newPerson);
  }
}
