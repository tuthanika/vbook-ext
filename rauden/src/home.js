function execute(url) {
    let response = fetch("https://shop.vietstarhp.com/api/vbook.php")
    if (response.ok) {
        let json = response.json();
        return Response.success(json);
    }
    return null;
}
