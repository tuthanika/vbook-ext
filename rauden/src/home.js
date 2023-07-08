function execute(url) {
    let response = fetch("https://rauden.xyz.wf/api/vbook.php")
    if (response.ok) {
        let json = response.json();
        return Response.success(json);
    }
    return null;
}
