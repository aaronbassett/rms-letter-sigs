let pageHeaderActions = document.querySelector(".pagehead-actions")
const actionLinkClasses = ["btn", "btn-sm", "btn-danger"]
const githubUsernames = ['svaksha', 'gear4s', 'ucko', 'bkmd100', 'adityasaky', 'mrafrazkhan', 'rurz', 'alexinea', 'lxmcf', 'alexdmccabe', 'amatas', 'ananyacleetus', 'nitrohorse', 'MadeByThePinsHub', 'AndrewDaGuy”', 'andschwa', 'stewart', 'athorp96', 'grifferz”', 'radii', 'cbeuw', 'zoho.com', '4cm4k1', 'anthony_m_cook', 'eyenx', 'nvcexploder', 'binford2k', 'obensource', '0b10011', 'brennx0r', 'bmc', 'bk2204', 'squiter', 'ironfroggy', 'camilasan', 'CatieSai', 'chad3814', 'SUSE', 'Allstate', 'sweetpavement', 'acdha', 'cl', 'unixbigot', 'CAD97', 'lauch_gemuese', 'cturra', 'clmntpllr', 'daltroaugusto', 'dduportal', 'dmathieu', 'damienstanton', 'danfuzz', 'dkg', 'octaforge', 's7sost', 'danhatesnumbers', 'daltomi', 'dashaun', 'waveform80', 'davidbailey00', 'gonzoucab', 'davidjguru', 'shmish111', 'divadsn', 'zeitiger', 'doawoo', 'dgoosens', 'dmuth', 'd-m-u', 'drewbrew', 'duncaen', 'dylan_hardison', 'dylanmccall', 'edu4rdshl', 'ell1e', '4PERTURE', 'ericsmalling', 'ericdallo', 'freiheit', 'iamemhn', 'madnight', 'fzero', 'fdschonborn', 'recollir', 'fcurella', 'fmount', 'frankofsandiego', 'genebean', 'xnorxnor', 'gcagle3', 'GlitchyPSIX', 'dontbenebby', 'guilieb', '_stultus', 'sidpatchy', 'juniorjpdj', 'dweomer', 'TomorJM', 'GloomyJD', 'csangos', 'floppy', 'jptoto', 'gnarflord', 'detiber', 'chaosaffe', 'jpargudo', 'jeetelongname', 'jeffbyrnes', 'kjwon15', 'jnf', 'techwolf359', 'acidflask', 'cyber-gene', 'aoeixsz4', 'infamousjoeg', 'johnburnett', 'jpettitt', 'jsleeio', 'lapingvino', 'joelazar', 'PetiPandaRou', 'JulienVanelian', 'junosz', 'chalkpe', 'tante', 'baughj', 'zippy1981', 'kspalaiologos', 'gnadelwartz', 'gnadelwartz', 'jukefr', 'sekia', 'kogeletey', 'kotx', 'combacsa', 'selfisekai', 'lilic', 'lilyinstarlight', 'lgaff', 'MadsRach', 'l-x-u', 'lri', 'lukpueh', 'LunaFoxgirlVT', 'PandaFoss', 'datamattsson', 'michaeltlombardi', 'miguelraz', 'ukmadlz', 'mxmilkiib', 'minhoryang', 'artoria2e5', 'molly', 'moosingin3space', 'ndickinsonwilde', 'nickwanninger', 'UNIGE', 'ZephyraSilentis', 'ayimdomnic', '', 'klassenpascal22', 'almaceleste', 'ptrcnull', 'PatrykNog', 'pkgw', 'peterdsharpe', 'stripedpajamas;', 'philpem', 'pierreozoux', 'plaes', 'ralf1307', 'rjray', 'raydeeam', 'gcaaa31928', 'Fussmatte', 'roadriverrail', 'hopolapola', '', 'HaoZeke', 'rowasc', 'rossmacarthur', 'roxabee', 'panzertime', 'freakboy3742;', 'ryancdotorg', 'cooperrc', '_tritoke', 'sjmsteffann', 'yudocaa', 'spaetz', 'sebidude', 'loudcolour', 'Shmuelie', 'sagruss', 'hakamadare', 'svaksha', 'tabatkins', 'cheginit', 'luser', 'mrdrogdrog', 'macleodsawyerms', 'tkphd', 'Nytelife26', 'acinonyx', 'apiology', 'DarkainMX', 'vincenzopalazzo', 'locao', 'vinisalazar', 'rebtoor', 'vladlenasossi', 'wrl', 'worr', 'wupeka', 'w00tSpeaks', 'Yangeok', 'Bloodevil', 'yeoncomi', 'kakaroto', 'zacharyarnaise', 'zach-klippenstein']

if (pageHeaderActions) {
  const username = window.location.pathname.split("/")[1]

  if (githubUsernames.includes(username)) {
    let listItem = document.createElement("li")
    let rmsLetterLink = document.createElement("a")
    rmsLetterLink.href = "https://rms-open-letter.github.io/"

    actionLinkClasses.forEach((className) =>
      rmsLetterLink.classList.add(className)
    )
    let linkText = document.createTextNode("RMS Open Letter Signator")

    rmsLetterLink.appendChild(linkText)
    listItem.appendChild(rmsLetterLink)
    pageHeaderActions.insertBefore(listItem, pageHeaderActions.firstChild)
  }
}
