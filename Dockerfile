FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY target/release/nestor-churin-suite ./
COPY index.html ./
COPY css ./css
COPY js ./js

EXPOSE 3000
ENV HOST=0.0.0.0 PORT=3000

CMD ["./nestor-churin-suite"]
