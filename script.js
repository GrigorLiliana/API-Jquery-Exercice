$(function() {
  $.ajax({
    method: "GET",
    url:
      "https://gnews.io/api/v2/?q=example&token=fe4a47b502b9ca93441c9abc16c915c9"
  }).done(function(response) {
    console.log(response);

    const myRandomChoise = (Math.random() * 10).toFixed();
    let article = response.articles[myRandomChoise];
    const articleDate = article.date;
    const articleDesc = article.desc;
    const articleTitle = article.title;
    const source = article.source;
    const link = article.link;

    $(".card-footer").text(articleDate);
    $(".card-text").text(articleDesc);
    $(".card-title").text(articleTitle);
    $(".card-header").text("From: " + source);
    $(".btn")
      .attr("href", link)
      .attr("target", "_blank");
    $("#loader").hide();
    for (const chaqueNew of response.articles) {
      const newSlide = $(".carousel-item")
        .eq(0)
        .clone();
      console.log(chaqueNew);
      let articleNotRandom = chaqueNew;
      newSlide.removeClass("d-none");
      newSlide.find(".source").text("From: " + chaqueNew.source);
      newSlide.find(".title").text(chaqueNew.title);
      newSlide.find(".desc").text(chaqueNew.desc);
      newSlide
        .find(".link")
        .attr("href", chaqueNew.link)
        .attr("target", "_blank");
      newSlide.find(".date").text(chaqueNew.date);
      newSlide.appendTo(".carousel-inner");
    }
    $(".carousel-item")
      .eq(1)
      .addClass("active");
  });
});
