use axum::{
    http::StatusCode,
    response::IntoResponse,
    routing::get,
    Router,
};
use std::{env, net::SocketAddr};
use tower_http::services::{ServeDir, ServeFile};

async fn health() -> impl IntoResponse {
    (StatusCode::OK, "ok")
}

async fn not_found() -> impl IntoResponse {
    (StatusCode::NOT_FOUND, "Not Found")
}

#[tokio::main]
async fn main() {
    let host = env::var("HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
    let port = env::var("PORT")
        .ok()
        .and_then(|value| value.parse::<u16>().ok())
        .unwrap_or(3000);

    let addr = format!("{host}:{port}")
        .parse::<SocketAddr>()
        .unwrap_or_else(|_| SocketAddr::from(([0, 0, 0, 0], port)));

    let app = Router::new()
        .route("/health", get(health))
        .route_service("/", ServeFile::new("index.html"))
        .route_service("/index.html", ServeFile::new("index.html"))
        .nest_service("/css", ServeDir::new("css"))
        .nest_service("/js", ServeDir::new("js"))
        .nest_service("/assets", ServeDir::new("assets"))
        .fallback(get(not_found));

    let listener = tokio::net::TcpListener::bind(addr)
        .await
        .expect("failed to bind TCP listener");

    println!("Bio site running on http://{}", listener.local_addr().unwrap());

    axum::serve(listener, app)
        .await
        .expect("server crashed");
}
