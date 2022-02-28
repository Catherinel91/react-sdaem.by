import { createServer } from "miragejs";

createServer({
    routes() {
      this.get("/api", () => {
        return {
  
          linksTop: [
            {
              id: 0,
              name: "Главная",
              url: "/"
            },
            {
              id: 1,
              name: "Новости",
              url: "/news"
            },
            {
              id: 2,
              name: "Размещение и тарифы",
              url: "/"
            },
            {
              id: 3,
              icon: true ,
              iconleft : true,
              name: "Объявления на карте",
              url: "/"
            },
            {
              id: 4,
              name: "Контакты",
              url: "/"
            }
            
          ],
          linksBottom: [
            {
              id: 0,
              name: "Квартиры на сутки",
              icon: true ,
              iconright : true,
              menu: true,
              url: "/"
            },
            {
              id: 1,
              name: "Коттеджи и усадьбы",
              url: "/"
            },
            {
              id: 2,
              name: "Баги и сауны",       
              url: "/"
            },
            {
              id: 3,        
              name: "Авто напрокат",
              url: "/"
            }
            
          ],
          linksDrop : [
            {
              id: 0,        
              name: "Квартиры на сутки в Минске",
              url: "/"
            },
            {
              id: 1,        
              name: "Квартиры на сутки в Могилеве",
              url: "/"
            },
            {
              id: 2,        
              name: "Квартиры на сутки в Гомеле",
              url: "/"
            },
            {
              id: 3,        
              name: "Квартиры на сутки в Бресте",
              url: "/"
            },
            {
              id: 4,        
              name: "Квартиры на сутки в Витебске",
              url: "/"
            },
            {
              id: 5,        
              name: "Квартиры на сутки в Гродно",
              url: "/"
            }
          ],
      
          linksfooter:[ 
              [
                {
                  id: 0,
                  name: "Коттеджи и усадьбы",
                  bold: true ,
                  url: "/"
                },
                {
                  id: 1,
                  bold: true ,
                  name: "Бани и сауны",
                  url: "/"
                },
                {
                  id: 2,
                  bold: true ,
                  name: "Авто на прокат",
                  url: "/"
                }
              ],
            [
              {
                id: 0,
                name: "Квартиры",
                bold: true ,
                url: "/"
              },
              {
                id: 1,
                name: "Квартиры в Минске",
                url: "/"
              },
              {
                id: 2,
                name: "Квартиры в Гомеле",
                url: "/"
              },
              {
                id: 3,
                name: "Квартиры в Бресте",
                url: "/"
              }
            ],
            [
              {
                id: 0,
                name: "Квартиры в Витебске",
                url: "/"
              },
              {
                id: 1,
                name: "Квартиры в Гродно",
                url: "/"
              },
              {
                id: 2,
                name: "Квартиры в Могилеве",
                url: "/"
              }
            ],
            [
              {
                id: 0,
                name: "Новости",
                url: "/"
              },
              {
                id: 1,
                name: "Размещение и тарифы",
                url: "/"
              },
              {
                id: 2,
                name: "Объявления на карте",
                url: "/"
              },
              {
                id: 3,
                name: "Контакты",
                url: "/"
              }
            ]
          ],
           newsCards : [
            {
              id: 0,
              img: "imgs/card-img.png",
              title: "Заголовок1",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 1,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки суровый отдых в усадьбах на сутки суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? ",  
              url: "/news-2",
              date: "14 Января 2008"
            },
            {
              id: 2,
              img: "imgs/card-img.png",
              title: "Заголовок1",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 3,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 4,
              img: "imgs/card-img.png",
              title: "Title",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 5,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 6,
              img: "imgs/card-img.png",
              title: "Title",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 7,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 8,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 9,
              img: "imgs/card-img.png",
              title: "Заголовок1 Стр2",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 10,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки суровый отдых в усадьбах на сутки суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? ",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 11,
              img: "imgs/card-img.png",
              title: "Заголовок1",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 12,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 13,
              img: "imgs/card-img.png",
              title: "Title",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 14,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 15,
              img: "imgs/card-img.png",
              title: "Title",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 16,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  
              url: "/news-1",
              date: "14 Января 2008"
            },
            {
              id: 17,
              img: "imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  
              url: "/news-1",
              date: "14 Января 2008"
            }
           ],           
           footersocial : [
            {
              id: 0,
              type: "ig", 
              url: "https://www.instagram.com"
            },
            {
              id: 1,
              type: "vk", 
              url: "https://vk.com"
            },
            {
              id: 2,
              type: "fb", 
              url: "https://www.facebook.com"
            }
          ],
           copyright : "<p>ИП Шушкевич Андрей Викторович</p>  <p>УНП 192602485 Минским горисполкомом</p>  <p>10.02.2016</p>  <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>  <p>+375 29 621 48 33, sdaem@sdaem.by</p>  <p>Режим работы: 08:00-22:00</p>'"
      }     
      
      });
      this.get("/api/newsDetailCards", () => ({        
        cards :  {
            id: 0,
            img: "../imgs/card-img.png",
            title: "Линия Сталина: суровый отдых в усадьбах на сутки",  
            text: "<p>Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.</p><p>«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.</p><p>Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.</p><p>Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!</p><p>Отличная усадьба в 10 км от 'Линии Сталина'.</p>",  
            url: "/news-1",
            date: "14 Января 2008"
          },

          shareIcons: [
            {
              id: 1,
              type: "vk", 
              url: "https://vk.com"
            },
            {
              id: 2,
              type: "fb", 
              url: "https://www.facebook.com"
            },
            {
              id: 3,
              type: "viber", 
              url: "https://vk.com"
            },
            {
              id: 4,
              type: "tg", 
              url: "https://www.facebook.com"
            },
            {
              id: 5,
              type: "whatsapp", 
              url: "https://www.facebook.com"
            },
          ],

          recomendations: [
            {
              id: 0,
              img: "../imgs/card-img.png",
              title: "Заголовок1",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-2",
              date: "14 Января 2008"
            },
            {
              id: 1,
              img: "../imgs/card-img.png",
              title: "Линия Сталина: суровый отдых в усадьбах на сутки суровый отдых в усадьбах на сутки суровый отдых в усадьбах на сутки",  
              text: "Чем заняться в выходные? ",  
              url: "/news-2",
              date: "14 Января 2008"
            },
            {
              id: 2,
              img: "../imgs/card-img.png",
              title: "Заголовок1",  
              text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А щзщз",  
              url: "/news-2",
              date: "14 Января 2008"
            },
          ]
        
      }))
    },
})
  