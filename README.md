# browser-sourcemap-spy

Analyze how browsers fetch source maps in real-time.

# The `SourceMap` or `X-SourceMap` HTTP Header

The SourceMap or X-SourceMap HTTP header is an integral response header that is primarily utilized in JavaScript (JS) files. Its main function is to create a linkage between the original source code and the resulting compiled code. Within a JS file, this connection is facilitated by the inclusion of a reference tag, such as `//# sourceMappingURL`, which points to the source map's location. 
