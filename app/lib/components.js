import Telescope from 'meteor/nova:lib'

// base
import ArticleCategory from "./components/base/ArticleCategory.js"
import ArticleIntro from "./components/base/ArticleIntro.js"
import ArticleTitle from "./components/base/ArticleTitle.js"
import Avatar from "./components/base/Avatar.js"
import DatePublished from "./components/base/DatePublished.js"
import HR from "./components/base/HR.js"
import Icon from "./components/base/Icon.js"
import Link from "./components/base/Link.js"
import Separator from "./components/base/Separator.js"
Telescope.components.ArticleCategory = ArticleCategory
Telescope.components.ArticleIntro = ArticleIntro
Telescope.components.ArticleTitle = ArticleTitle
Telescope.components.Avatar = Avatar
Telescope.components.DatePublished = DatePublished
Telescope.components.HR = HR
Telescope.components.Icon = Icon
Telescope.components.Link = Link
Telescope.components.Separator = Separator

// containers
import ArticleHeader from "./containers/ArticleHeader.js"
import Container from "./containers/Container.js"
import ContributorList from "./containers/ContributorList.js"
import FooterContainer from "./containers/FooterContainer.js"
import LayoutContainer from "./containers/LayoutContainer.js"
import NavContainer from "./containers/NavContainer.js"
import PhotoCredits from "./containers/PhotoCredits.js"
Telescope.components.ArticleHeader = ArticleHeader
Telescope.components.Container = Container
Telescope.components.ContributorList = ContributorList
Telescope.components.FooterContainer = FooterContainer
Telescope.components.LayoutContainer = LayoutContainer
Telescope.components.NavContainer = NavContainer
Telescope.components.PhotoCredits = PhotoCredits

// contributors
import CharityCredit from "./components/contributors/CharityCredit.js"
import Contributor from "./components/contributors/Contributor.js"
import ContributorAssociation from "./components/contributors/ContributorAssociation.js"
import ContributorCredit from "./components/contributors/ContributorCredit.js"
import ContributorLink from "./components/contributors/ContributorLink.js"
import ContributorRole from "./components/contributors/ContributorRole.js"
Telescope.components.CharityCredit = CharityCredit
Telescope.components.Contributor = Contributor
Telescope.components.ContributorAssociation = ContributorAssociation
Telescope.components.ContributorCredit = ContributorCredit
Telescope.components.ContributorLink = ContributorLink
Telescope.components.ContributorRole = ContributorRole

// particles
import ParticleAttachment from "./components/particles/ParticleAttachment.js"
import ParticleH1 from "./components/particles/ParticleH1.js"
import ParticleH2 from "./components/particles/ParticleH2.js"
import ParticleH3 from "./components/particles/ParticleH3.js"
import ParticleH4 from "./components/particles/ParticleH4.js"
import ParticleH5 from "./components/particles/ParticleH5.js"
import ParticleH6 from "./components/particles/ParticleH6.js"
import ParticleHeroImage from "./components/particles/ParticleHeroImage.js"
import ParticleImag from "./components/particles/ParticleImag.js"
import ParticleImage from "./components/particles/ParticleImage.js"
import ParticleIntro from "./components/particles/ParticleIntro.js"
import ParticlePullquote from "./components/particles/ParticlePullquote.js"
import ParticleText from "./components/particles/ParticleText.js"
import ParticleVideo from "./components/particles/ParticleVideo.js"
Telescope.components.ParticleAttachment = ParticleAttachment
Telescope.components.ParticleH1 = ParticleH1
Telescope.components.ParticleH2 = ParticleH2
Telescope.components.ParticleH3 = ParticleH3
Telescope.components.ParticleH4 = ParticleH4
Telescope.components.ParticleH5 = ParticleH5
Telescope.components.ParticleH6 = ParticleH6
Telescope.components.ParticleHeroImage = ParticleHeroImage
Telescope.components.ParticleImag = ParticleImag
Telescope.components.ParticleImage = ParticleImage
Telescope.components.ParticleIntro = ParticleIntro
Telescope.components.ParticlePullquote = ParticlePullquote
Telescope.components.ParticleText = ParticleText
Telescope.components.ParticleVideo = ParticleVideo

// layouts
import LayoutFeature from "./layouts/LayoutFeature.js"
import LayoutFront from "./layouts/LayoutFront.js"
import LayoutLookbook from "./layouts/LayoutLookbook.js"
import LayoutPictureIntensive from "./layouts/LayoutPictureIntensive.js"
import LayoutShort from "./layouts/LayoutShort.js"
Telescope.components.LayoutFeature = LayoutFeature
Telescope.components.LayoutFront = LayoutFront
Telescope.components.LayoutLookbook = LayoutLookbook
Telescope.components.LayoutPictureIntensive = LayoutPictureIntensive
Telescope.components.LayoutShort = LayoutShort

// mock data
import MockFront from '../data/MockFront'
Telescope.components.MockFront = MockFront
