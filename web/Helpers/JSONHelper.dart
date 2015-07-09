library JSONHelper;

import 'dart:html';
import 'dart:async';

class JSONHelper {
  static Future<String> FetchData() {
    return HttpRequest.getString('http://localhost:63342/Portfolio/web/data/data.json');
  }
}
