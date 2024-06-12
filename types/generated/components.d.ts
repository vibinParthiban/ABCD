import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCardChild extends Schema.Component {
  collectionName: 'components_blocks_card_children';
  info: {
    displayName: 'CardChild';
  };
  attributes: {
    typename: Attribute.String;
    productName: Attribute.Component<'blocks.field-type'>;
    productDescription: Attribute.Component<'blocks.field-type'>;
    primaryCTAButton: Attribute.Component<'blocks.cta'>;
    secondaryCTAButton: Attribute.Component<'blocks.cta'>;
    posterImage: Attribute.Component<'blocks.image'>;
    background: Attribute.Component<'blocks.field-type'>;
    swiperClass: Attribute.Component<'blocks.field-type'>;
  };
}

export interface BlocksCardParent extends Schema.Component {
  collectionName: 'components_blocks_card_parents';
  info: {
    displayName: 'CardParent';
  };
  attributes: {
    tabName: Attribute.Component<'blocks.field-type'>;
    leftIcon: Attribute.Component<'blocks.field-type'>;
    heading: Attribute.Component<'blocks.field-type'>;
    subheading: Attribute.Component<'blocks.field-type'>;
    primaryCTAButton: Attribute.Component<'blocks.cta'>;
    secondaryCTAButton: Attribute.Component<'blocks.cta'>;
    accordionClass: Attribute.Component<'blocks.field-type'>;
    flyers: Attribute.Component<'blocks.flyers', true>;
    recommendedForYou: Attribute.Component<'blocks.prod-recommendation'>;
    children: Attribute.Component<'blocks.card-child', true>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    href: Attribute.Text;
    text: Attribute.String;
    linktype: Attribute.String;
    url: Attribute.Text;
    anchor: Attribute.Text;
    title: Attribute.Text;
    class: Attribute.String;
    typename: Attribute.String;
  };
}

export interface BlocksFieldType extends Schema.Component {
  collectionName: 'components_blocks_field_types';
  info: {
    displayName: 'FieldType';
    description: '';
  };
  attributes: {
    dataType: Attribute.String;
    value: Attribute.String;
  };
}

export interface BlocksFlyers extends Schema.Component {
  collectionName: 'components_blocks_flyers';
  info: {
    displayName: 'Flyers';
    description: '';
  };
  attributes: {
    textname: Attribute.String;
    textvalue: Attribute.String;
    imagesrc: Attribute.String;
    imagename: Attribute.String;
  };
}

export interface BlocksIFrame extends Schema.Component {
  collectionName: 'components_blocks_i_frames';
  info: {
    displayName: 'iFrame';
    icon: 'link';
  };
  attributes: {
    iframeUrl: Attribute.Text;
  };
}

export interface BlocksIcon extends Schema.Component {
  collectionName: 'components_blocks_icons';
  info: {
    displayName: 'Icon';
    icon: 'picture';
  };
  attributes: {
    src: Attribute.Text;
    alt: Attribute.Text;
  };
}

export interface BlocksImage extends Schema.Component {
  collectionName: 'components_blocks_images';
  info: {
    displayName: 'image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    src: Attribute.Text;
    alt: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    typename: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksLabel extends Schema.Component {
  collectionName: 'components_blocks_labels';
  info: {
    displayName: 'Label';
  };
  attributes: {
    value: Attribute.Text;
  };
}

export interface BlocksProdRecommendation extends Schema.Component {
  collectionName: 'components_blocks_prod_recommendations';
  info: {
    displayName: 'ProdRecommendation';
  };
  attributes: {
    typename: Attribute.String;
    name: Attribute.String;
    targetItems: Attribute.Component<'blocks.target-items', true>;
  };
}

export interface BlocksProdSubCategory extends Schema.Component {
  collectionName: 'components_blocks_prod_sub_categories';
  info: {
    displayName: 'ProdSubCategory';
  };
  attributes: {
    typename: Attribute.Component<'blocks.title', true>;
    primaryCTAButton: Attribute.Component<'blocks.cta'>;
    secondaryCTAButton: Attribute.Component<'blocks.cta'>;
    accordionClass: Attribute.Component<'blocks.field-type'>;
  };
}

export interface BlocksStickyMenuItem extends Schema.Component {
  collectionName: 'components_blocks_sticky_menu_items';
  info: {
    displayName: 'StickyMenuItem';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.Component<'blocks.label'>;
    icon: Attribute.Component<'blocks.icon'>;
    iconSecond: Attribute.Component<'blocks.icon'>;
    CTA: Attribute.Component<'blocks.cta'>;
  };
}

export interface BlocksTargetItemsTypeTwo extends Schema.Component {
  collectionName: 'components_blocks_target_items_type_twos';
  info: {
    displayName: 'TargetItemsTypeTwo';
  };
  attributes: {
    typename: Attribute.String;
    type: Attribute.Component<'blocks.field-type', true>;
  };
}

export interface BlocksTargetItems extends Schema.Component {
  collectionName: 'components_blocks_target_items';
  info: {
    displayName: 'targetItems';
  };
  attributes: {
    typename: Attribute.String;
    name: Attribute.String;
    productName: Attribute.Component<'blocks.field-type'>;
    productType: Attribute.Component<'blocks.field-type'>;
    icon: Attribute.Component<'blocks.field-type'>;
    cta: Attribute.Component<'blocks.cta'>;
  };
}

export interface BlocksTargetTypeTwo extends Schema.Component {
  collectionName: 'components_blocks_target_type_twos';
  info: {
    displayName: 'TargetTypeTwo';
  };
  attributes: {
    typename: Attribute.String;
    type: Attribute.Component<'blocks.field-type', true>;
  };
}

export interface BlocksTitle extends Schema.Component {
  collectionName: 'components_blocks_titles';
  info: {
    displayName: 'title';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    heading: Attribute.Blocks;
    subheading: Attribute.Text;
    cssclass: Attribute.String;
    typename: Attribute.String;
  };
}

export interface BlocksVideoCarousel extends Schema.Component {
  collectionName: 'components_blocks_video_carousels';
  info: {
    displayName: 'video-carousel';
    icon: 'play';
  };
  attributes: {
    url: Attribute.Text;
    name: Attribute.String;
    displayName: Attribute.String;
    YoutubeID: Attribute.String;
    PosterImage: Attribute.Component<'blocks.image'>;
    Background: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.Text;
    Address: Attribute.Text;
    AuthorName: Attribute.String;
    AuthorTitle: Attribute.String;
    AuthorImage: Attribute.Component<'blocks.image'>;
    EntryDate: Attribute.DateTime;
    ShowInCarousel: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface HeadersMenuCard extends Schema.Component {
  collectionName: 'components_headers_menu_cards';
  info: {
    displayName: 'menuCard';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuSubTitle: Attribute.Text;
    url: Attribute.Text;
    icon: Attribute.Component<'blocks.icon'>;
  };
}

export interface SectionsBranchLocators extends Schema.Component {
  collectionName: 'components_sections_branch_locators';
  info: {
    displayName: 'BranchLocators';
    icon: 'pinMap';
  };
  attributes: {
    heading: Attribute.Component<'blocks.title'> & Attribute.Required;
    iframeUrl: Attribute.Component<'blocks.i-frame'>;
  };
}

export interface SectionsCtaBanner extends Schema.Component {
  collectionName: 'components_sections_cta_banners';
  info: {
    displayName: 'CTABanner';
    description: '';
  };
  attributes: {
    heading1: Attribute.String;
    heading2: Attribute.String;
    subheading: Attribute.Text;
    metaversebg: Attribute.Component<'blocks.image'>;
    knowmorebtntext: Attribute.Component<'blocks.cta'>;
    cssclass: Attribute.String;
    metaversebgMobile: Attribute.Component<'blocks.image'>;
    modalTitle: Attribute.Text;
    modalSubTitle: Attribute.Text;
  };
}

export interface SectionsCustSatisCarousel extends Schema.Component {
  collectionName: 'components_sections_cust_satis_carousels';
  info: {
    displayName: 'CustSatisCarousel';
    icon: 'repeat';
  };
  attributes: {
    title: Attribute.Component<'blocks.title'>;
    custSatisCarousel: Attribute.Component<'blocks.video-carousel', true>;
  };
}

export interface SectionsFinanceSolution extends Schema.Component {
  collectionName: 'components_sections_finance_solutions';
  info: {
    displayName: 'FinanceSolution';
  };
  attributes: {
    typename: Attribute.String;
    header: Attribute.Component<'blocks.title', true>;
    cardParent: Attribute.Component<'blocks.card-parent', true>;
    tabName: Attribute.Component<'blocks.field-type'>;
    headline: Attribute.Component<'blocks.field-type'>;
    cssClass: Attribute.Component<'blocks.field-type'>;
  };
}

export interface SectionsStickyMenu extends Schema.Component {
  collectionName: 'components_sections_sticky_menus';
  info: {
    displayName: 'StickyMenu';
  };
  attributes: {
    menuItems: Attribute.Component<'blocks.sticky-menu-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.card-child': BlocksCardChild;
      'blocks.card-parent': BlocksCardParent;
      'blocks.cta': BlocksCta;
      'blocks.field-type': BlocksFieldType;
      'blocks.flyers': BlocksFlyers;
      'blocks.i-frame': BlocksIFrame;
      'blocks.icon': BlocksIcon;
      'blocks.image': BlocksImage;
      'blocks.label': BlocksLabel;
      'blocks.prod-recommendation': BlocksProdRecommendation;
      'blocks.prod-sub-category': BlocksProdSubCategory;
      'blocks.sticky-menu-item': BlocksStickyMenuItem;
      'blocks.target-items-type-two': BlocksTargetItemsTypeTwo;
      'blocks.target-items': BlocksTargetItems;
      'blocks.target-type-two': BlocksTargetTypeTwo;
      'blocks.title': BlocksTitle;
      'blocks.video-carousel': BlocksVideoCarousel;
      'headers.menu-card': HeadersMenuCard;
      'sections.branch-locators': SectionsBranchLocators;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.cust-satis-carousel': SectionsCustSatisCarousel;
      'sections.finance-solution': SectionsFinanceSolution;
      'sections.sticky-menu': SectionsStickyMenu;
    }
  }
}
