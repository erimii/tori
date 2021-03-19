interface ICast {
  name: string;
  character_name: string;
  url_small_image: string;
}
interface IMovieDetail {
  id: number;
  title: string;
  title_english: string;
  title_long: string;
  cast: Array<ICast>;
  description_full: string;
  description_intro: string;
  genres: Array<string>;
  large_cover_image: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
  like_count: number;
  rating: number;
  runtime: number;
  year: number;
}

interface GiveNTake {
  thing_index: number;
  set_index: number;
  thing_amount: number;
  thing_status: number;
  thing_name: string;
  thing_oneDescription: string;
  thing_description: string;
  thing_target_money: number;
  thing_crowd_money: number;
  thing_img_name: string;
  brand: string;
  thing_endOrNot: number;
}