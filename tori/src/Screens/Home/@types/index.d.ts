interface IMovie {
    id: number;
    title: string;
    title_english: string;
    title_long: string;
    summary: string;
    synopsis: string;
    background_image: string;
    background_image_original: string;
    date_uploaded: string;
    date_uploaded_unix: number;
    description_full: string;
    genres: Array<string>;
    imdb_code: string;
    language: string;
    large_cover_image: string;
    medium_cover_image: string;
    mpa_rating: string;
    rating: number;
    runtime: number;
    slug: string;
    small_cover_image: string;
    state: string;
    url: string;
    year: number;
    yt_trailer_code: string;
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