import React from 'react'
import SimpleCarousel from "../Open Intl/v2/SimpleCarousel/SimpleCarousel"
import Gallery1 from "../Gallery/Gallery1/Gallery1"
import Map1 from '../Map/Map1/Map1';
import Tabs2 from '../Open Intl/v2/Tabs2/Tabs2';
import Feature2 from '../Feature/Feature2/Feature2';
import RichTextComponent from '../RichTextComponent/RichTextComponent';
import CTA1 from '../Open Intl/v2/CTA/CTA1/CTA1';
import InvertedDetailSection from '../Sections/InvertedDetailSection/InvertedDetailSection';
import SectionTitle from '../Open Intl/v2/SectionTitle/SectionTitle';
import Card4 from '../card/Card4/Card4'
import Contact from '../Open Intl/v2/Contact/ContactPage';
import MainContainer from '../Maincontainer/Maincontainer';

const ComponentRenderer = (data:any) => {

  switch (data?.__typename) {
    case 'ComponentReactRenderCarousel':
      return <SimpleCarousel data={data?.testimonial_data} />
      case 'ComponentReactRendeComponentPageCtarCarousel':
      return <CTA1 {...data} />
      case 'ComponentPageServiceContainerTypes':
      return <Feature2 title={data?.sectionTitle} subtitle='' feature_card={data?.data} />
      case 'ComponentPageMapType':
      return <Map1 location={data?.location} width={data?.width} height={data?.height} />
      case 'ComponentPageTabsTypes':
      return <Tabs2 title={data?.title} subtitle={data?.subtitle} data={data?.data} />
      case 'ComponentReactRenderFeature':
      return <Feature2 title={data?.title} subtitle={data?.subtitle} feature_card={data?.feature_card} />
      case 'ComponentReactRenderRichText':
      return <RichTextComponent {...data} />
      case 'ComponentPageSectionTitleTypes':
      return <MainContainer><SectionTitle {...data} /></MainContainer>
      case 'ComponentPageGalleryPage':
      return <Gallery1 {...data} />
      case 'ComponentPageCta':
      return <CTA1 {...data} />
      case 'ComponentPageSectionsTypes':
      return <InvertedDetailSection sectionTitle={data?.title} subtitle={data?.subtitle} data={data?.feature_card}/>
      case 'ComponentPageContact':
      return <Contact contactDetails={{...data?.office_location,map:data?.map}}/>
      case 'ComponentEntityPlayer':
      return <Card4 imageUrl={data?.image} title={data?.name} subTitle={data?.designation} avatar/>
    default:
      return <div className='text-destructive_foreground'>Component rendering not handled yet!!!</div>
  }

    
}

export const PageRenderer = (
    {data}:any
) => {
  return <div>
    {
        data?.map((con:any, i:number)=>{
            return ComponentRenderer(con)
          })
    }
  </div>
}

export default PageRenderer