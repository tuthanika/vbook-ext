function execute(key, page) {
    let site = ["tangthuvien", "truyencv", "wattpad", "html5qq", "69shu", "jiaston"];
    let i = 0, z = 3;
    const data = [];
    if (key.match(/[\u4E00-\u9FFF]/g) !== null) {
        i += 3;
        z += 4;
    }
    for (i; i < z; i++) {
        let url = "https://shop.vietstarhp.com/search.php?q=" + key + "&cweb=" + site[i]
        let response = fetch(url)
        if (response.ok) {
            let doc = response.html();
            let el = doc.select('#search_result > div > div');
            let sizel = el.size()
            if (sizel > 5) {
                sizel = 5;
            }
            for (let j = 0; j < sizel; j++) {
                var e = el.get(j);
                data.push({
                    name: site[i] + "-" + e.select('a').first().attr("title"),
                    link: "https://shop.vietstarhp.com" + e.select('a').first().attr("href"),
                    cover: e.select("img").attr("data-src"),
                    host: "https://shop.vietstarhp.com"
                });
            }
        }
    }
    return Response.success(data);
}
