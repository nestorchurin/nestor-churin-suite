FROM rust:1.79 AS builder

ARG REPO_URL=https://github.com/nestorchurin/nestor-churin-suite.git
ARG REPO_REF=main

RUN apt-get update && apt-get install -y git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
RUN git clone --depth 1 --branch "${REPO_REF}" "${REPO_URL}" .
RUN cargo build --release

FROM debian:bookworm-slim AS runtime

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /usr/src/app/target/release/nestor-churin-suite ./
COPY --from=builder /usr/src/app/index.html ./
COPY --from=builder /usr/src/app/css ./css
COPY --from=builder /usr/src/app/js ./js

# assets are not present in the remote main branch, so they are excluded here.
# If you need local assets, add them to the repository or mount them separately.

EXPOSE 3000
ENV HOST=0.0.0.0 PORT=3000

CMD ["./nestor-churin-suite"]
