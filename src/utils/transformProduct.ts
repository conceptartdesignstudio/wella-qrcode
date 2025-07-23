import { getMediaUrl } from '@/features/general/getMediaUrl'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function transformProductDataFromRest(data: any) {
  const acf = data?.acf || {}

  const image = await getMediaUrl(acf?.product_image)

  return {
    title: data?.title?.rendered || '',
    brandName: acf?.selected_product_brand || '',
    content: {
      productName: acf?.product_name || '',
      ingredients: acf?.ingredients || '',
      learnMore: {
        heading: acf?.more_heading || '',
        link: acf?.more_infos || '',
        text: acf?.more_text || '',
        video: acf?.more_video || ''
      },
      socialMedias: {
        facebook: acf?.facebook || '',
        instagram: acf?.instagram || '',
        youtube: acf?.youtube || ''
      }
    },
    colors: {
      backgroundColor: acf?.background_color || '#fff',
      informativeColor: acf?.informative_icons_color || '#000',
      moreColor: acf?.more_color || '#000',
      socialMediaColor: acf?.social_media_color || '#000',
      textColor: acf?.product_inci_color || '#000',
      titleColor: acf?.product_name_color || '#000'
    },
    displayRules: {
      facebook: acf?.display_facebook || false,
      instagram: acf?.display_instagram || false,
      youtube: acf?.display_youtube || false,
      learnLink: acf?.display_learn_more_link || false,
      learnVideo: acf?.display_learn_more || false,
      imageAsBlock: acf?.display_image_as_block || false,
      imageAsSlide: acf?.display_slider || false,
      title: acf?.display_title || false,
      text: acf?.display_text || false,
      video: acf?.display_video || false,
      mediaPosition: acf?.slide_display_position || 'displayMediaAboveTitle',
      videoPosition: acf?.video_display_position || 'displayVideoAboveTitle'
    },
    icons: {
      eac: acf?.eac || false,
      reciclagem: acf?.reciclagem || false,
      retornavel: acf?.retornavel || false,
      book: acf?.book || false,
      dozeM: acf?.dozeM || false,
      descartavel: acf?.descartavel || false,
      lixeira: acf?.lixeira || false,
      ppTampa: acf?.pp || false,
      ppPote: acf?.pp_pote || false,
      ppPoteTampa: acf?.pp_pote_tampa || false,
      pead: acf?.pead || false,
      pebd: acf?.pebd || false,
      paper: acf?.paper || false,
      pet: acf?.pet || false,
      glass: acf?.glass || false,
      aluminum: acf?.aluminum || false,
      iron: acf?.iron || false,
      others: acf?.others || false
    },
    productImg: image || '',
    singleImage: '',
    slideImages: []
  }
}
