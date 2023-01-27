# grpc-ts
Testing typescript and grpc client/server implementation

Couldn't find a 100% working implementation of this... so tried to recreate from stuff I found 2+ years ago...

One thing to make note of is when running the build.sh script.... the d.ts file shouldn't be created (according to protoc-gen-ts docs) ... it also is still using grpc-js (Deprecated).. instead of @grpc/grpc-js
