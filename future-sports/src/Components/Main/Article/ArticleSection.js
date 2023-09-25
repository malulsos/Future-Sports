import React from "react";
import Article from "./Article"; 

const ArticleSection = () => {
    const articles = [
      {
          title: "First Article",
          intro: "This is the introduction for the first article. When you click read more a lightbox will appear to show the full article.",
          content: <p>Lorem ipsum dolor sit amet. Non iusto consectetur et tempore illum ut laborum Quis? Et cumque laudantium ut dolores aliquam vel culpa ullam non adipisci pariatur ab eveniet quaerat. Non reiciendis consequuntur et galisum dolorem id voluptas rerum non aliquid voluptatibus et veniam galisum aut officiis aspernatur.<br /><br />
          Sit voluptatem earum ea deleniti earum eum vero corrupti et libero sint et quia adipisci! Non quasi omnis et ipsa deleniti non quia perspiciatis in excepturi autem et inventore iusto qui modi omnis. Ut voluptas quam rem odio minus aut temporibus quam et optio nisi ut molestias adipisci qui obcaecati distinctio. A eius consequatur et veniam fugit et galisum consequuntur et quia galisum in vitae repudiandae id repudiandae beatae ex quia ipsam.<br /><br />
          Ut quia sunt et eius debitis rem iure voluptate cum cupiditate obcaecati ut incidunt sunt sed reiciendis recusandae sit dolorem deleniti. Sit autem culpa ut enim inventore et obcaecati quia vel nihil ipsum. Est ratione molestiae non possimus laboriosam non inventore similique et enim libero eum accusantium eligendi. Rem enim explicabo ea recusandae optio ut consequatur rerum.
          Non libero error ut veritatis quas qui ratione nisi. <br /><br /> Aut placeat illum ut blanditiis ipsum sit sapiente nesciunt ad illum aliquid non molestiae quae nam fugit dolorem. Est blanditiis illum vel omnis voluptatibus ex suscipit mollitia. Eum officia similique vel animi repellat in optio laudantium sed eius accusamus et dolores illum rem repellat galisum sed facere nesciunt.<br /><br />
          Qui tempora molestias et aspernatur debitis et galisum cupiditate a fuga odit a dolorem impedit quo porro tempora ut recusandae fugit. Id quae tenetur eos nihil totam 33 nostrum internos aut magni nihil ab velit pariatur vel eaque sapiente. Hic alias quia ut eveniet fuga a debitis odio.<br /><br />
          Ea assumenda deserunt est expedita assumenda est tempora voluptas a necessitatibus reiciendis eum doloremque libero et natus facere hic dolor cumque. Eum rerum quis sed voluptates officiis eum numquam doloremque eos quidem illo et recusandae cupiditate ut corrupti earum!<br /><br />
          Ut fuga voluptatum est blanditiis galisum qui illum repudiandae sed consequuntur explicabo! Et temporibus repudiandae id reprehenderit quibusdam et fuga asperiores id necessitatibus totam est dolorem enim.
          33 aliquid voluptatem ut ipsa iure qui sunt ipsam? Est beatae perspiciatis eum incidunt autem est nobis quia ea molestiae galisum ut galisum totam et enim impedit 33 modi error. Qui omnis architecto qui voluptates pariatur rem dolor unde At voluptatem voluptatibus.<br /><br />
          Aut commodi nisi ut enim fugiat ea veniam placeat cum tempora corrupti ea reprehenderit voluptatem. Vel enim rerum qui exercitationem laborum et corporis molestiae ut nobis voluptatum hic consequuntur delectus vel sunt minus hic nulla odit.<br /><br />
          Aut nisi odit non quisquam ipsa et maxime eligendi nam dolorem consequatur qui explicabo molestiae aut consequatur molestiae. Vel voluptatem doloremque hic eaque provident sed voluptatem ullam ut inventore consequatur! Qui debitis ratione quo voluptates nesciunt est fuga placeat ut quam debitis qui eaque odit.</p>,
},
      {
          title: "Second Article",
          intro: "This is the introduction for the second article. When you click read more a lightbox will appear to show the full article.",
          content: <p>Lorem ipsum dolor sit amet. Non iusto consectetur et tempore illum ut laborum Quis? Et cumque laudantium ut dolores aliquam vel culpa ullam non adipisci pariatur ab eveniet quaerat. Non reiciendis consequuntur et galisum dolorem id voluptas rerum non aliquid voluptatibus et veniam galisum aut officiis aspernatur.<br /><br />
                    Sit voluptatem earum ea deleniti earum eum vero corrupti et libero sint et quia adipisci! Non quasi omnis et ipsa deleniti non quia perspiciatis in excepturi autem et inventore iusto qui modi omnis. Ut voluptas quam rem odio minus aut temporibus quam et optio nisi ut molestias adipisci qui obcaecati distinctio. A eius consequatur et veniam fugit et galisum consequuntur et quia galisum in vitae repudiandae id repudiandae beatae ex quia ipsam.<br /><br />
                    Ut quia sunt et eius debitis rem iure voluptate cum cupiditate obcaecati ut incidunt sunt sed reiciendis recusandae sit dolorem deleniti. Sit autem culpa ut enim inventore et obcaecati quia vel nihil ipsum. Est ratione molestiae non possimus laboriosam non inventore similique et enim libero eum accusantium eligendi. Rem enim explicabo ea recusandae optio ut consequatur rerum.
                    Non libero error ut veritatis quas qui ratione nisi. <br /><br /> Aut placeat illum ut blanditiis ipsum sit sapiente nesciunt ad illum aliquid non molestiae quae nam fugit dolorem. Est blanditiis illum vel omnis voluptatibus ex suscipit mollitia. Eum officia similique vel animi repellat in optio laudantium sed eius accusamus et dolores illum rem repellat galisum sed facere nesciunt.<br /><br />
                    Qui tempora molestias et aspernatur debitis et galisum cupiditate a fuga odit a dolorem impedit quo porro tempora ut recusandae fugit. Id quae tenetur eos nihil totam 33 nostrum internos aut magni nihil ab velit pariatur vel eaque sapiente. Hic alias quia ut eveniet fuga a debitis odio.<br /><br />
                    Ea assumenda deserunt est expedita assumenda est tempora voluptas a necessitatibus reiciendis eum doloremque libero et natus facere hic dolor cumque. Eum rerum quis sed voluptates officiis eum numquam doloremque eos quidem illo et recusandae cupiditate ut corrupti earum!<br /><br />
                    Ut fuga voluptatum est blanditiis galisum qui illum repudiandae sed consequuntur explicabo! Et temporibus repudiandae id reprehenderit quibusdam et fuga asperiores id necessitatibus totam est dolorem enim.
                    33 aliquid voluptatem ut ipsa iure qui sunt ipsam? Est beatae perspiciatis eum incidunt autem est nobis quia ea molestiae galisum ut galisum totam et enim impedit 33 modi error. Qui omnis architecto qui voluptates pariatur rem dolor unde At voluptatem voluptatibus.<br /><br />
                    Aut commodi nisi ut enim fugiat ea veniam placeat cum tempora corrupti ea reprehenderit voluptatem. Vel enim rerum qui exercitationem laborum et corporis molestiae ut nobis voluptatum hic consequuntur delectus vel sunt minus hic nulla odit.<br /><br />
                    Aut nisi odit non quisquam ipsa et maxime eligendi nam dolorem consequatur qui explicabo molestiae aut consequatur molestiae. Vel voluptatem doloremque hic eaque provident sed voluptatem ullam ut inventore consequatur! Qui debitis ratione quo voluptates nesciunt est fuga placeat ut quam debitis qui eaque odit.</p>,
      },

      // Further articles added here
      
  ];

  return (
    <section className="news">
      <a id="news"></a>
      <h2>News</h2>
        {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          intro={article.intro}
          content={article.content}
        />
      ))}
    </section>
  );
};

export default ArticleSection;
