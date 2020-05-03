const url = new URL("http://user:pass@sub.example.com:81/path/page.html?foo=bar&xuq=xuuq&qux=quux#hash")

url.hash          // '#hash'
url.host          // 'sub.example.com:81'
url.hostname      // 'sub.example.com'
url.href          // 'http://user:pass@sub.example.com:81/path/page.html?foo=bar&xuq=xuuq&qux=quux#hash'
url.origin        // 'http://sub.example.com:81'
url.password      // 'pass'
url.pathname      // '/path/page.html'
url.port          // '81'
url.protocol      // 'http:'
url.search        // '?foo=bar&xuq=xuuq&qux=quux'
url.searchParams  // URLSearchParams { 'foo' => 'bar', 'xuq' => 'xuuq', 'qux' => 'quux' }
url.username      // 'user'

const params = url.searchParams

params.append("foo", "baz")  // void              // 'foo=bar&xuq=xuuq&qux=quux&foo=baz'
params.has("waldo")          // false             // 'foo=bar&xuq=xuuq&qux=quux&foo=baz'
params.get("foo")            // 'bar'             // 'foo=bar&xuq=xuuq&qux=quux&foo=baz'
params.getAll("foo")         // [ 'bar', 'baz' ]  // 'foo=bar&xuq=xuuq&qux=quux&foo=baz'
params.set("foo", "foobar")  // void              // 'foo=foobar&xuq=xuuq&qux=quux'
params.delete("foo")         // void              // 'xuq=xuuq&qux=quux'

params.sort()      // void
params.toString()  // 'qux=quux&xuq=xuuq'

params.entries()  // URLSearchParams Iterator { [ 'qux', 'quux' ], [ 'xuq', 'xuuq' ] }
params.keys()     // URLSearchParams Iterator { 'qux', 'xuq' }
params.values()   // URLSearchParams Iterator { 'quux', 'xuuq' }

params.forEach(value => console.log(value)) // quux ↵ xuuq
for (const [key, value] of params) { console.log(`${key}:${value}`) } // qux:quux ↵ xuq:xuuq

// Updating URL

url.protocol = 'https:'
url.port = ''
url.username = ''
url.password = ''
url.hash = ''

url.toString() // 'https://sub.example.com/path/page.html?qux=quux&xuq=xuuq'

// Constructing a new URL

const newurl = new URL('http://x')

newurl.protocol = 'https:'
newurl.hostname = 'example.com'
newurl.pathname = '/path'
newurl.searchParams.set('q', 'foo') // void

newurl.toString() // 'https://example.com/path?q=foo'
