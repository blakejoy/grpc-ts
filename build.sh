#!/bin/fish

#!/bin/bash
PROTO_DIR=./proto/js
# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto
# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_opt=target=node \
    --ts_opt=grpc_package=@grpc/grpc-js \
    --ts_opt=unary_rpc_promise=true \
    --ts_out=${PROTO_DIR} \
    -I ./proto \
    proto/*.proto
