# Language Death and Endangerment:
## An Interactive Visualization of the Status of Dead, Dying, and Endangered Languages Worldwide
### CSC-475 Project Report
Grace Warren \
Department of Computer Science \
Furman University \
grace.warren@furman.edu 

### Abstract
Despite the attention given to language death by linguists in recent decades, the general population is largely unaware of language death and its implications. Furthermore, even experts must navigate paywalls to access conventionally creditable works, such as Ethnologue [1]. To address issues of accessibility and awareness, a dataset compiling publicly available information is provided, coupled with an analysis of the availability of that information. This data is then used to provide a website visualizing this information, providing a general audience the opportunity to explore the issue of language death in a palatable format.

### Background
Language death is not a novel topic in the field of linguistics. Rather, the phrase language death was first used in 1972, lending the field the opportunity to discuss, research, and preserve language status for the past 50 years. [2] Yet, despite humanity’s current disposition to lose over 6,000 languages within the century - and with them cultures, knowledge, identities, and social customs - the reality of language death, and the implications therein, are seldom known outside of the field. The grim outlook of world languages is effectively conveyed by the following estimates:
1. The Language Conservancy (TLC) estimates that "more than 7,000 languages resound across
our planet every moment, but about 2,900 or 41% are endangered. At current rates, about
90% of all languages will become extinct in the next 100 years." [3]
2. The United Nations Educational, Scientific and Cultural Organization (UNESCO), estimates
an even faster rate of language death, positing that "around 3,000 languages could disappear before the end of the century, at a rate of one every two weeks." [4] 

Languages encapsulate much more than semantics: they carry with them the history, experiences, and ways of life of their speakers. This ranges from indigenous medicinal practices - many of which use flora native to the land, often untranslated and unrecorded in any other language - to nuanced phrases developed from the experiences of generations. 

Despite the gravity of such losses, the most comprehensive literature exists behind paywalls. Conventionally credible sources such as Ethnologue and Atlas of the World’s Languages require even academics to pay lofty subscription and purchase fees, occasionally copyright licenses. [1] [5] Furthermore, resources such as UNESCO’s The World Atlas of Languages (UNESCO WAL), which advertise downloadable data to account holders - obtainable through signing up for an account - is poorly monitored. This leaves the general population with access to one comprehensive resource: Glottolog. [6]

Glottolog, although publicly accessible, is subject to three criticisms:
1. Glottolog is not considered the conventional source for information about languages, and thus is not perceived within academia as credible when compared with the standard: Ehtnologue.
2. Glottolog data is not available for download in its entirety. Although this is common, and Glottolog creators are not obligated to release their hard-earned data, this leaves people with no publicly available resource for viewing comprehensive language data.
3. Glottolog is not easily navigable for all users. Although this is surely a qualitative assessment, it is worth considering that Glottolog windows are nested, and require users to navigate through multiple steps to view statistics on a single language. For the general population, this organization may not be maximally effective.

These assessments are not intended to be critical; rather, they are meant to assess the usability of Glottolog in raising awareness of language death when presented to the average user. Although comprehensive, the navigability of Glottolog is a potentially ineffective presentation of language data.

To address the issue of accessibility described above, I propose the creation of a website which has the primary function of:
1. The exclusive visualization of publicly available information about languages.
2. A visualization which emphasizes the extent to which languages are endangered.
3. A visualization which emphasizes the lack of publicly available data on language status.
This was accomplished using minimal information from Glottolog, and the majority of information from Wikipedia language pages. 

### Data
To emphasize what information is publicly available for world languages, the following information was obtained from Wikipedia pages (where discover-able) for a complete list of world languages as provided by ISO-639-3 Codes:
1. The name of each language in English (as labeled by ISO Codes),
2. The ISO-6393 Code,
3. The glottocode,
4. The degree of endangerment as listed by Glottolog’s Agglomerated Endagerment status,
5. The degree of endangerment as listed by UNESCO WAL,
6. The level of the language as listed by Glottolog,
7. The macroarea of the language as listed by Glottolog,
8. The type of language as listed by Glottolog,
9. The scope of the language as listed by Glottolog,
10. The number of speakers as listed by UNESCO WAL where applicable, and Wikipedia
elsewhere,
11. The dialects as listed by Wikipedia,
12. The regions where a language is spoken as listed by Wikipedia,
13. The nations where a language is an official language as listed by Wikipedia,
14. The nations where a language is a recognized minority language as listed by Wikipedia,
15. The latitude value for a language as listed by Glottolog,
16. The longitude value for a language as listed by Glottolog, and
17. The url used to scrape information from Wikipedia regarding that language.

ISO-639-3 Codes were downloaded from the wooorm/iso-639-3 github repository. [25] Values obtained from Glottolog were pulled from their downloadable files found at https://glottolog.org/meta/downloads. [6] Values obtained from Wikipedia were scraped from the infobox table on a given page. Values obtained from UNESCO were scraped from the data provided on the page found at https://www.theguardian.com/news/datablog/2011/apr/15/languageextinct-endangered. [26] 

### Reflections on the Created Visualization/Website

The visualization found at https://gcwarren.github.io/LanguageStatusVisualizationProject/ is contrary to many principles of what is considered a good visualization (i.e. clarity, resolution). This is intentional. This project aims to create an *impressionable* experience for viewers, and bring larger emphasis to languages which are *more* threatened. Common solutions to large map-based visualizations (i.e. clustering pointers) would ultimately blend languages - and their statuses - together, failing to present the proportion of Agglomerated Endangerement Statuses accurately. Thus, despite consequences to website performance, each language is represented individually. 

### Future Work
As displayed by this paper, information regarding language death is not always publicly accessible. That which is can sometimes be difficult to navigate, and comprehensive downloadable data often impossible to find. Presently, humanity is faced with the loss of 90% of world languages within the next century. Yet, efforts to make information regarding this issue more accessible are low, and ultimately fall short. This paper provides a compilation of as much publicly available information as possible. Yet, this information is not guaranteed to be recent, nor is it guaranteed to be as accurate nor as detailed as
the data which lies behind Ethnologue’s paywalls. However, the data provided herein is public, and individuals who wish to utilize it are free to.

Future uses of this data include improving the accuracy and resolution of the data herein, and implementing a downloadable feature to the website itself, such that users do not have to visit the github repository page to attain the collected data. The optimal outcome of this paper would be the dissemination of more detailed data from organizations such as Ethnologue, Glottolog, and UNESCO WAL. Additionally, introducing the topic of language death - and its implications - to a general audience through social media, documentaries,
and other promotional mediums would raise further awareness of language death, and conceivably increase conversations surrounding language death.

### References
[1] Richard Oliver Collin. Ethnologue. Ethnopolitics, 9(3-4):425–432, 2010. \
[2] ARNOLD M ZwICKY. Phonologica 1972, ed. byw. dressler & f. mareš, wilhelm fink (1975)
151-65. \
[3] The language conservancy, 2023. \
[4] A decade to prevent the disappearance of 3,000 languages, 2022. \
[5] Ronald E Asher and Christopher Moseley. Atlas of the world’s languages. Routledge, 2018. \
[6] Martin Haspelmath Sebastian Bank. Harald Hammarström, Robert Forkel. Glottologglottolog/glottolog: Glottolog database 5.0 (v5.0), 2024. [Online; accessed 19-April-2024]. \
[7] Philology. Oxford English Dictionary. Oxford UP, December 2023. \
[8] Myles Davies. Athenæ Britannicæ: Or, a Critical History of the Oxford and Cambrige [sic] Writers and Writings,... as Well as Other Authors and Worthies, Both Domestick and Foreign, Both Ancient and Modern.... By MD... author, 1716. \
[9] Historical Linguistics. Oxford English Dictionary. Oxford UP, September 2023. \
[10] Sociolinguistics. Oxford English Dictionary. Oxford UP, July 2023. \
[11] Wolfgang U Dressler. Papers 8th regional meeting chicago ling. society 448. 1972. \
[12] Language Death. Oxford English Dictionary. Oxford UP, September 2023. \
[13] Language Shift. Oxford English Dictionary. Oxford UP, September 2023. \
[14] CA From Ferguson, L Menn, and C Stoel-Gammon. Weinreich, u.(1953). languages in contact. new york: Linguistic circle of new. \
[15] Minority Language. Oxford English Dictionary. Oxford UP, July 2023. \
[16] Wolfgang U Dressler. Language shift and language death—a protean challenge for the linguist. 1981. \
[17] Language Attrition. Oxford English Dictionary. Oxford UP, September 2023. \
[18] Wolfgang U Dressler. Independent, dependent and interdependent variables in language decay and language death. European Review, 26(1):120–129, 2018. \
[19] Christopher Moseley. Atlas of the World’s Languages in Danger. Unesco, 2010. \
[20] Michael Krauss. The world’s languages in crisis. Language, 68(1):4–10, 1992. \
[21] András Kornai. Digital language death. PloS one, 8(10):e77056, 2013. \
[22] Marlyse Baptista. On the role of agency, marginalization, multilingualism, and language policy in maintaining language vitality: Commentary on mufwene. Language, 93(4):e298–e305, 2017. \
[23] Reza Ghafar Samar and Tej K Bhatia. Predictability of language death: Structural compatibility and language contact. Language Sciences, 62:52–65, 2017. \
[24] Susan Chebet-Choge. The case of dead and non-used nandi anthroponyms, 2010. \
[25] Titus. iso-639-3, 2021. [Online; accessed 19-April-2024]. \
[26] Endangered languages: The full list, 2016. 
