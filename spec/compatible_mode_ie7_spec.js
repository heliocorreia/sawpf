Cookie.unset('__sawpf_');
fakeUserAgent('Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)');
document['documentMode'] = 5;
require('/src/1.0.js');

describe('Internet Explorer 8.0/9.0 com user-agent do IE7 por causa do compatibility mode', function() {
  it('should not show sawpf bar', function() {
    expect(document.getElementById('sawpf')).not.toExist();
  });
});
