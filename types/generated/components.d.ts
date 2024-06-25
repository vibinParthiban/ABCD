import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBannerForm extends Schema.Component {
  collectionName: 'components_blocks_banner_forms';
  info: {
    displayName: 'BannerForm';
  };
  attributes: {
    Heading: Attribute.String;
    SubHeading: Attribute.String;
    ProductDropdown: Attribute.Component<'blocks.product-dropdown', true>;
    TermsnCondition: Attribute.Component<'blocks.link'>;
    ThankYouIcon: Attribute.Component<'blocks.link'>;
  };
}

export interface BlocksBlogListComp extends Schema.Component {
  collectionName: 'components_blocks_blog_list_comps';
  info: {
    displayName: 'blogListComp';
  };
  attributes: {
    link: Attribute.String;
    category: Attribute.String;
    title: Attribute.String;
    date: Attribute.String;
    time_to_read: Attribute.String;
  };
}

export interface BlocksCalculatorLink extends Schema.Component {
  collectionName: 'components_blocks_calculator_links';
  info: {
    displayName: 'calculatorLink';
    icon: 'link';
  };
  attributes: {
    heading: Attribute.Component<'blocks.label'>;
    subheading: Attribute.Component<'blocks.label'>;
    calculatorIcon: Attribute.Component<'blocks.icon'>;
    backgroundImage: Attribute.Component<'blocks.image'>;
    link: Attribute.Component<'blocks.link'>;
    linkLabel: Attribute.Component<'blocks.label'>;
  };
}

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
    url: Attribute.Text;
    anchor: Attribute.Text;
    title: Attribute.Text;
    class: Attribute.String;
    typename: Attribute.String;
  };
}

export interface BlocksDropdownFieldsComp extends Schema.Component {
  collectionName: 'components_blocks_dropdown_fields_comps';
  info: {
    displayName: 'DropdownFieldsComp';
  };
  attributes: {
    Label: Attribute.String;
    GroupNumber: Attribute.Integer;
    KeyValue: Attribute.String;
    Icon: Attribute.Component<'blocks.icon'>;
    Key: Attribute.String;
    ProductCategory: Attribute.String;
    ProductName: Attribute.String;
    LOB: Attribute.String;
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

export interface BlocksFieldsImgCarousel extends Schema.Component {
  collectionName: 'components_blocks_fields_img_carousels';
  info: {
    displayName: 'fieldsImgCarousel';
    description: '';
  };
  attributes: {
    Heading: Attribute.Blocks;
    Subheading: Attribute.String;
    BannerImage: Attribute.Component<'blocks.image'>;
    Infograph: Attribute.String;
    ButtonCTA: Attribute.Component<'blocks.cta'>;
    CssClass: Attribute.String;
    VideoLink: Attribute.String;
    VideoBGImage: Attribute.String;
    PlayIcon: Attribute.String;
    VideoText: Attribute.String;
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

export interface BlocksImageCarousel extends Schema.Component {
  collectionName: 'components_blocks_image_carousels';
  info: {
    displayName: 'Image-carousel';
  };
  attributes: {
    url: Attribute.String;
    name: Attribute.String;
    displayName: Attribute.String;
    Heading: Attribute.Component<'blocks.text-with-sub-text'>;
    Subheading: Attribute.String;
    BannerImage: Attribute.Component<'blocks.image'>;
    Infograph: Attribute.String;
    ButtonCTA: Attribute.Component<'blocks.cta'>;
    CssClass: Attribute.String;
    VideoLink: Attribute.String;
    VideoBGImage: Attribute.String;
    PlayIcon: Attribute.String;
    VideoText: Attribute.String;
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

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    url: Attribute.Text;
    text: Attribute.String;
  };
}

export interface BlocksMobileOnly extends Schema.Component {
  collectionName: 'components_blocks_mobile_onlies';
  info: {
    displayName: 'MobileOnly';
  };
  attributes: {
    value: Attribute.Boolean & Attribute.DefaultTo<false>;
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

export interface BlocksProductDropdown extends Schema.Component {
  collectionName: 'components_blocks_product_dropdowns';
  info: {
    displayName: 'ProductDropdown';
  };
  attributes: {
    url: Attribute.String;
    name: Attribute.String;
    displayName: Attribute.String;
    Label: Attribute.String;
    GroupNumber: Attribute.Integer;
    KeyValue: Attribute.String;
    Icon: Attribute.Component<'blocks.icon'>;
    Key: Attribute.String;
    ProductCategory: Attribute.String;
    ProductName: Attribute.String;
    LOB: Attribute.String;
  };
}

export interface BlocksQuickLink extends Schema.Component {
  collectionName: 'components_blocks_quick_links';
  info: {
    displayName: 'QuickLink';
    icon: 'link';
  };
  attributes: {
    Label: Attribute.Component<'blocks.label'>;
    Link: Attribute.Component<'blocks.link'>;
  };
}

export interface BlocksRelatedRead extends Schema.Component {
  collectionName: 'components_blocks_related_reads';
  info: {
    displayName: 'relatedRead';
    icon: 'book';
  };
  attributes: {
    heading: Attribute.Component<'blocks.label'>;
    subHeading: Attribute.Component<'blocks.label'>;
    bgImage: Attribute.Component<'blocks.image'>;
    ctaLink: Attribute.Component<'blocks.link'>;
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

export interface BlocksTextWithSubText extends Schema.Component {
  collectionName: 'components_blocks_text_with_sub_texts';
  info: {
    displayName: 'TextWithSubText';
  };
  attributes: {
    text: Attribute.RichText;
    smallText: Attribute.String;
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

export interface FootersCompanies extends Schema.Component {
  collectionName: 'components_footers_companies';
  info: {
    displayName: 'companies';
    description: '';
  };
  attributes: {
    companyName: Attribute.String;
    icon: Attribute.String;
    link: Attribute.String;
  };
}

export interface FootersFollowComp extends Schema.Component {
  collectionName: 'components_footers_follow_comps';
  info: {
    displayName: 'FollowComp';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuLink: Attribute.String;
    menuIcon: Attribute.String;
  };
}

export interface FootersFollowParent extends Schema.Component {
  collectionName: 'components_footers_follow_parents';
  info: {
    displayName: 'FollowParent';
  };
  attributes: {
    displayName: Attribute.String;
    children: Attribute.Component<'footers.follow-comp', true>;
  };
}

export interface FootersFooterInfo extends Schema.Component {
  collectionName: 'components_footers_footer_infos';
  info: {
    displayName: 'FooterInfo';
    description: '';
  };
  attributes: {
    Logo: Attribute.String;
    LogoCTA: Attribute.String;
    Icon: Attribute.String;
    TollText: Attribute.String;
    IconCTA: Attribute.Component<'footers.icon-and-url'>;
    SubsidiariesTitle: Attribute.String;
    DownloadText: Attribute.String;
    DownloadIcon: Attribute.String;
    AppStore: Attribute.Component<'footers.icon-and-url'>;
    AppStoreIcon: Attribute.String;
    PlayStore: Attribute.Component<'footers.icon-and-url'>;
    PlayStoreIcon: Attribute.String;
    Address: Attribute.RichText;
    WarningText: Attribute.RichText;
    RedRibonText: Attribute.RichText;
  };
}

export interface FootersFooterTabs extends Schema.Component {
  collectionName: 'components_footers_footer_tabs';
  info: {
    displayName: 'FooterTabs';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuLink: Attribute.String;
  };
}

export interface FootersIconAndUrl extends Schema.Component {
  collectionName: 'components_footers_icon_and_urls';
  info: {
    displayName: 'IconAndURL';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface FootersTabPrimary extends Schema.Component {
  collectionName: 'components_footers_tab_primaries';
  info: {
    displayName: 'TabPrimary';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuLink: Attribute.String;
    menuIcon: Attribute.String;
    mobileOnly: Attribute.String;
    tabs: Attribute.Component<'footers.footer-tabs', true>;
  };
}

export interface FootersTabsComp extends Schema.Component {
  collectionName: 'components_footers_tabs_comps';
  info: {
    displayName: 'TabsComp';
  };
  attributes: {
    name: Attribute.String;
    primary: Attribute.Component<'footers.tab-primary', true>;
  };
}

export interface HeadersClickableItem extends Schema.Component {
  collectionName: 'components_headers_clickable_items';
  info: {
    displayName: 'ClickableItem';
  };
  attributes: {
    Label: Attribute.Component<'blocks.label'>;
    Icon: Attribute.Component<'blocks.icon'>;
    CTA: Attribute.Component<'blocks.cta'>;
    CssClass: Attribute.Component<'blocks.label'>;
  };
}

export interface HeadersHeadRightSide extends Schema.Component {
  collectionName: 'components_headers_head_right_sides';
  info: {
    displayName: 'headRightSide';
  };
  attributes: {
    HeadRightItems: Attribute.Component<'headers.clickable-item', true>;
  };
}

export interface HeadersLogo extends Schema.Component {
  collectionName: 'components_headers_logos';
  info: {
    displayName: 'logo';
    icon: 'picture';
  };
  attributes: {
    CompanyName: Attribute.Component<'blocks.label'>;
    Icon: Attribute.Component<'blocks.icon'>;
    Link: Attribute.Component<'blocks.link'>;
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

export interface HeadersMenuItem extends Schema.Component {
  collectionName: 'components_headers_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuLink: Attribute.Text;
    menuIcon: Attribute.Text;
    mobileOnly: Attribute.Boolean & Attribute.DefaultTo<false>;
    cssClassName: Attribute.Text;
    menuTabs: Attribute.Component<'headers.menu-tabs', true>;
  };
}

export interface HeadersMenuTabs extends Schema.Component {
  collectionName: 'components_headers_menu_tabs';
  info: {
    displayName: 'MenuTabs';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuLink: Attribute.Text;
    CssId: Attribute.Text;
    yellowSubTab: Attribute.Text;
    viewAllLink: Attribute.Component<'blocks.link'>;
    menuCards: Attribute.Component<'headers.menu-card', true>;
    calculatorLinks: Attribute.Component<'blocks.calculator-link', true>;
    relatedReads: Attribute.Component<'blocks.related-read', true>;
  };
}

export interface HeadersMenu extends Schema.Component {
  collectionName: 'components_headers_menus';
  info: {
    displayName: 'MainMenu';
  };
  attributes: {
    menuItems: Attribute.Component<'headers.menu-item', true>;
  };
}

export interface HeadersQuickLink extends Schema.Component {
  collectionName: 'components_headers_quick_link';
  info: {
    displayName: 'QuickLink';
  };
  attributes: {
    QuickLink: Attribute.Component<'blocks.quick-link', true>;
  };
}

export interface HeadersQuickServiceCard extends Schema.Component {
  collectionName: 'components_headers_quick_service_cards';
  info: {
    displayName: 'QuickServiceCard';
  };
  attributes: {
    menuTitle: Attribute.Component<'blocks.label'>;
    menuLink: Attribute.Component<'blocks.label'>;
    menuIcon: Attribute.Component<'blocks.icon'>;
    mobileOnly: Attribute.Component<'blocks.mobile-only'>;
    QuickLinks: Attribute.Component<'headers.quick-link', true>;
  };
}

export interface HeadersQuickServices extends Schema.Component {
  collectionName: 'components_headers_quick_services';
  info: {
    displayName: 'QuickServices';
  };
  attributes: {
    QuickServiceCards: Attribute.Component<'headers.quick-service-card', true>;
  };
}

export interface HeadersTopNavItem extends Schema.Component {
  collectionName: 'components_headers_top_nav_items';
  info: {
    displayName: 'topNavItem';
  };
  attributes: {
    displayName: Attribute.String;
    menuTitle: Attribute.Component<'blocks.label'>;
    menuIcon: Attribute.Component<'blocks.icon'>;
    menuLink: Attribute.Component<'blocks.link'>;
    mobileOnly: Attribute.Component<'blocks.mobile-only'>;
    TopNavTabs: Attribute.Component<'headers.top-nav-tab', true>;
  };
}

export interface HeadersTopNavLinks extends Schema.Component {
  collectionName: 'components_headers_top_nav_links';
  info: {
    displayName: 'topNavLinks';
  };
  attributes: {
    label: Attribute.Component<'blocks.label'>;
    link: Attribute.Component<'blocks.link'>;
  };
}

export interface HeadersTopNavTab extends Schema.Component {
  collectionName: 'components_headers_top_nav_tabs';
  info: {
    displayName: 'topNavTab';
  };
  attributes: {
    heading: Attribute.Component<'blocks.label'>;
    TopNavLinks: Attribute.Component<'headers.top-nav-links', true>;
  };
}

export interface HeadersTopNavigation extends Schema.Component {
  collectionName: 'components_headers_top_navigations';
  info: {
    displayName: 'TopNavigation';
  };
  attributes: {
    displayName: Attribute.String;
    TopNavItems: Attribute.Component<'headers.top-nav-item', true>;
  };
}

export interface SectionsBlogs extends Schema.Component {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    viewAllBlogsText: Attribute.String;
    viewAllBlogsLink: Attribute.String;
    minReadText: Attribute.String;
    sectionTitle: Attribute.Blocks;
    blogListItems: Attribute.Component<'blocks.blog-list-comp', true>;
  };
}

export interface SectionsBranchLocators extends Schema.Component {
  collectionName: 'components_sections_branch_locators';
  info: {
    displayName: 'BranchLocators';
    icon: 'pinMap';
  };
  attributes: {
    heading: Attribute.Text;
    iframeUrl: Attribute.Text;
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

export interface SectionsDiscoverSection extends Schema.Component {
  collectionName: 'components_sections_discover_sections';
  info: {
    displayName: 'DiscoverSection';
  };
  attributes: {
    dcAppBarImg: Attribute.Component<'blocks.image'>;
    backgroundImage: Attribute.Component<'blocks.image'>;
    heading1: Attribute.String;
    heading2: Attribute.String;
    cssclass: Attribute.String;
    subheading1: Attribute.String;
    qrcodeText: Attribute.String;
    appDownloadHeading: Attribute.String;
    mobileAppImg: Attribute.Component<'blocks.image'>;
    appleStoreImg: Attribute.Component<'blocks.image'>;
    appleStoreCTAButton: Attribute.Component<'blocks.cta'>;
    playStoreCTAButton: Attribute.Component<'blocks.cta'>;
    playStoreImg: Attribute.Component<'blocks.image'>;
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

export interface SectionsHomeBanner extends Schema.Component {
  collectionName: 'components_sections_home_banners';
  info: {
    displayName: 'HomeBanner';
  };
  attributes: {
    heading: Attribute.String;
    cssclass: Attribute.String;
    infoGraph: Attribute.Component<'blocks.text-with-sub-text', true>;
    carouselItems: Attribute.Component<'blocks.image-carousel', true>;
    BannerForm: Attribute.Component<'blocks.banner-form'>;
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
      'blocks.banner-form': BlocksBannerForm;
      'blocks.blog-list-comp': BlocksBlogListComp;
      'blocks.calculator-link': BlocksCalculatorLink;
      'blocks.card-child': BlocksCardChild;
      'blocks.card-parent': BlocksCardParent;
      'blocks.cta': BlocksCta;
      'blocks.dropdown-fields-comp': BlocksDropdownFieldsComp;
      'blocks.field-type': BlocksFieldType;
      'blocks.fields-img-carousel': BlocksFieldsImgCarousel;
      'blocks.flyers': BlocksFlyers;
      'blocks.i-frame': BlocksIFrame;
      'blocks.icon': BlocksIcon;
      'blocks.image-carousel': BlocksImageCarousel;
      'blocks.image': BlocksImage;
      'blocks.label': BlocksLabel;
      'blocks.link': BlocksLink;
      'blocks.mobile-only': BlocksMobileOnly;
      'blocks.prod-recommendation': BlocksProdRecommendation;
      'blocks.prod-sub-category': BlocksProdSubCategory;
      'blocks.product-dropdown': BlocksProductDropdown;
      'blocks.quick-link': BlocksQuickLink;
      'blocks.related-read': BlocksRelatedRead;
      'blocks.sticky-menu-item': BlocksStickyMenuItem;
      'blocks.target-items-type-two': BlocksTargetItemsTypeTwo;
      'blocks.target-items': BlocksTargetItems;
      'blocks.target-type-two': BlocksTargetTypeTwo;
      'blocks.text-with-sub-text': BlocksTextWithSubText;
      'blocks.title': BlocksTitle;
      'blocks.video-carousel': BlocksVideoCarousel;
      'footers.companies': FootersCompanies;
      'footers.follow-comp': FootersFollowComp;
      'footers.follow-parent': FootersFollowParent;
      'footers.footer-info': FootersFooterInfo;
      'footers.footer-tabs': FootersFooterTabs;
      'footers.icon-and-url': FootersIconAndUrl;
      'footers.tab-primary': FootersTabPrimary;
      'footers.tabs-comp': FootersTabsComp;
      'headers.clickable-item': HeadersClickableItem;
      'headers.head-right-side': HeadersHeadRightSide;
      'headers.logo': HeadersLogo;
      'headers.menu-card': HeadersMenuCard;
      'headers.menu-item': HeadersMenuItem;
      'headers.menu-tabs': HeadersMenuTabs;
      'headers.menu': HeadersMenu;
      'headers.quick-link': HeadersQuickLink;
      'headers.quick-service-card': HeadersQuickServiceCard;
      'headers.quick-services': HeadersQuickServices;
      'headers.top-nav-item': HeadersTopNavItem;
      'headers.top-nav-links': HeadersTopNavLinks;
      'headers.top-nav-tab': HeadersTopNavTab;
      'headers.top-navigation': HeadersTopNavigation;
      'sections.blogs': SectionsBlogs;
      'sections.branch-locators': SectionsBranchLocators;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.cust-satis-carousel': SectionsCustSatisCarousel;
      'sections.discover-section': SectionsDiscoverSection;
      'sections.finance-solution': SectionsFinanceSolution;
      'sections.home-banner': SectionsHomeBanner;
      'sections.sticky-menu': SectionsStickyMenu;
    }
  }
}
