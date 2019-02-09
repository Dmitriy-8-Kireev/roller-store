export default class ApistoreService {
  data = [
    {
      id: 1,
      title: "Самокат HELLO WOOD HW Micron XL-1",
      specifications: "рама из сплава алюминия, материал колес: полиуретан",
      wheeldiameter: "диаметр колес 230 мм, толщина 34 мм",
      weight: "4.8 кг",
      price: 3910,
      coverImage:
        "https://avatars.mds.yandex.net/get-mpic/195452/img_id4391503519493651975/9hq"
    },
    {
      id: 2,
      title: "Самокат SHULZ 200 Pro",
      specifications: "материал колес: полиуретан",
      wheeldiameter: "диаметр колес 200 мм",
      weight: "6.1 кг",
      price: 7820,
      coverImage:
        "https://avatars.mds.yandex.net/get-mpic/364668/img_id7139315448179193599.jpeg/9hq"
    },
    {
      id: 1,
      title: "Электросамокат KUGOO S3",
      specifications: "материал колес: резина",
      wheeldiameter: "диаметр колес 200 мм",
      weight: "12 кг",
      price: 11500,
      coverImage:
        "https://avatars.mds.yandex.net/get-mpic/1362400/img_id2265701916596758660.jpeg/9hq"
    }
  ];

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("O nooooOOO!!!:))))))"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
