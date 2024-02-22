# Language Death and Endangerment: An Interactive Visualization of the Status of Dead, Dying, and Endangered Languages Worldwide

## Project Proposal

### Project Title
Language Death and Endangerment: An Interactive Visualization of the Reality of Dead, Dying, and Endangered Languages Worldwide

### Author Information
Grace Warren  
Department of Computer Science  
Furman University  
grace.warren@furman.edu

### Background
The Language Conservancy (TLC) estimates that "more than 7,000 languages resound across our planet every moment, but about 2,900 or 41% are endangered. At current rates, about 90% of all languages will become extinct in the next 100 years." [1] The United Nations Educational, Scientific and Cultural Organization (UNESCO) estimates an even faster rate of language death, positing that "around 3,000 languages could disappear before the end of the century, at a rate of one every two weeks." [2]

The death of languages worldwide is not a novel topic in the field of linguistics. On the contrary, the term "language death" was first used in 1972, allowing for 50 years of discussion, research, and language preservation efforts. [3] However, the reality of language death is seldom discussed - or known - outside of the field. Yet, humanity stands to lose over 6,000 languages within the century, and with them cultures, knowledge, solidarity, and societies.

Languages encapsulate much more than prescriptive meaning; they carry with them ways of being associated with a group of speakers. This ranges from indigenous medicinal practices - many of which use flora native to the land, which in many cases, has yet to be translated or recorded in any language - to nuanced concepts developed across generations of speakers.

Unfortunately, the gravity of language death is not understood - nor known - by most people. By means of this project, I hope to create an accessible means of disseminating this knowledge, which makes the immediate importance of language preservation palatable to a wider audience.

### Goal
To create an easily comprehensible presentation of the significance of language death to users, I propose a website that visualizes changes in the endangerment of languages in recent years.

In order to accomplish this, I intend to make a visualization for which users can filter information by language, endangerment level, and nation. For each language, I aim to collect the following data, ideally for the past ten years:
1. The number of speakers of each language per nation
2. The total population of speakers per year
3. The endangerment level of that language, as declared each year

For each language, I will display this language in two ways. First, for a given language in a given year, I will display a world map that highlights the nations wherein that language is spoken and displays the number of speakers in that nation. Users will also be provided with the option to display the same information as graphs, to provide a 'big picture' image of these statistics for the last decade, side by side.

### Data
Specify the dataset(s) you will use and cite their source. Describe briefly the provenance of the data: who collected it and made it available? How frequently?
If you plan to collect your own data, describe how you will do that and how long you expect it to take.

To accomplish this, I will be using the following data, which I have described and cited below:
1. The World Atlas of Languages. This is an interactive interface provided by UNESCO - which is updated as frequently as possible, but at no set interval - which displays much of the information I hope to use. Although similar, this website does not provide a visualization of these languages on a map, nor is it easy to navigate. [4]
2. Atlas of the World's Languages, a book published in 2018 by Asher, which records much more extensive information about languages across the world and features detailed visualizations of languages spoken in different regions. [5]
3. A list of all endangered languages in the world, providing the number of speakers and endangerment index. Published by The Guardian, using data provided by UNESCO. [6]
4. The Atlas of the World's Languages in Danger by UNESCO. [7]
5. Languages By Time of Extinction - published by Wikipedia - as a guideline for recently extinct languages to include. [8]
6. The Language Conservancy, for data similar to that of UNESCO. [9]

I would like to note that upon the approval of my application for an account with UNESCO's World Atlas of Languages (WAL), I will be granted access to download .csv files of the data on the WAL website in a much more navigable form. Hopefully, this will avoid the need for data scraping.

### Methods
To make my website, I will be exploring the use of Google Maps API, Bokeh, Datawrapper, Flourish, and HERE Maps.
To create graph representations of the data I collect, I will be using the Seaborn library in Python.

The final result of my project will be different from the sources I am using, as I am aiming to make it more accessible to the public, as well as consolidating information into a single web page.

### Evaluation
To assess the success of my project, I would analyze how much of the data I set out to collect was made available on my website. This could start with the number of languages I represent and continue into smaller details such as the availability of speakers over the past ten years, etc.

### Dissemination
I will disseminate my project as a website, which will be publicly available. Additionally, I will be displaying my website at Furman Engaged.

I am unsure of whether I will make my final report public, but I am not opposed to it.

[1] TLC. The Language Conservancy. Retrieved from [https://www.languageconservancy.org/](https://www.languageconservancy.org/)
[2] UNESCO. United Nations Educational, Scientific and Cultural Organization. Retrieved from [https://en.unesco.org/](https://en.unesco.org/)
[3] Zwicky, A. M. (1972). Phonologica 1972: Proceedings of the 1st International Phonology Meeting. [https://www.cambridge.org/](https://www.cambridge.org/)
[4] UNESCO. World Atlas of Languages. Retrieved from [https://www.unesco.org/languages-atlas/](https://www.unesco.org/languages-atlas/)
[5] Asher, R. E. (2018). Atlas of the World's Languages. Routledge.
[6] The Guardian. Retrieved from [https://www.theguardian.com/](https://www.theguardian.com/)
[7] UNESCO. Atlas of the World's Languages in Danger. Retrieved from [https://www.unesco.org/](https://www.unesco.org/)
[8] Wikipedia. Languages By Time of Extinction. Retrieved from [https://en.wikipedia.org/](https://en.wikipedia.org/)
[9] The Language Conservancy. Retrieved from [https://www.languageconservancy.org/](https://www.languageconservancy.org/)
