library JSONHelper;

import 'dart:io' as io;
import 'dart:html';
import 'dart:async';
import 'dart:convert';

class JSONHelper {
  static Future<String> FetchData(String url) {
    return HttpRequest.getString(url);
  }

  static Future Insert(String url, Map _person) {
    return HttpRequest.getString(url).then((str) {
      var Response = JSON.decode(str);
      var friends = Response["Friends"] as List<Map>;
      friends.add(_person);
      Response["Friends"] = JSON.encode(friends);
      var _result = JSON.encode(Response);
      new io.File('data/data.json').writeAsString(_result).then((file) {
        return file.length();
      });
    });
  }

}
