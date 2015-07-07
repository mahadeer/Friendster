library FormParser;

import "dart:html";


class FormParser {
  var _data = {};
  String as = "Data";
  String target;
  FormParser(this.target, {String as: "Data", bool bindValue: true}) {
    var _formElements = querySelectorAll('${this.target} input,select');
    var _form = querySelector('${this.target}');
    var _as = _form.attributes['bind-obj'];
    this.as = _as;
    if(_as == null) {
      this.as = as;
    }
    _data[this.as] = {};
    int _idx = 0;
    for(Element inputElem in _formElements) {
      if(bindValue) {
        _GetBindValue(inputElem);
      } else {
        _GetValue(inputElem, _idx);
        _idx++;
      }
    }
  }

  _GetBindValue (var elem) {
    var _key = elem.attributes["bind-value"];
    _data[this.as][_key] = elem.value;
  }

  _GetValue(var elem, int i) {
    _data[this.as][i] = elem.value;
  }

  dynamic ParseData() {
    return _data;
  }
}
