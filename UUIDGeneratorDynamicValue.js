
(function() {
  var UUIDGeneratorDynamicValue;

  UUIDGeneratorDynamicValue = function() {
    this.evaluate = function() {
      var d = Date.now();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
    };
    this.title = function() {
      return "UUID Generator";
    };
  };

  UUIDGeneratorDynamicValue.identifier = "com.sportuondo.UUIDGeneratorDynamicValue";

  UUIDGeneratorDynamicValue.title = "UUID Generator Dynamic Value";

  UUIDGeneratorDynamicValue.inputs = [];

  registerDynamicValueClass(UUIDGeneratorDynamicValue);

}).call(this);
