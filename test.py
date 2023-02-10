x = """Allegory
Alliteration
Allusion
Ambiguity
Antagonist
Antithesis
Apostrophe
Archetype
Assonance
Atmosphere
Bildungsroman
Black Humor
Burlesque
Cacophony
Canon/Canonical
Catharsis
Climax
Conceit
Conflict
Connotation
Consonance
Denotation
Denouement
Diction
Dirge
Dystopia
Elegiac
Epiphany
Euphemism
Foil
Foreshadowing
Free Verse
Genre
Gothic
Hamartia
Hubris
Hyperbole
Iambic Pentameter
Idiom
Imagery
Irony
Juxtaposition
Memoir
Metaphor
Meter
Metonymy
Mood
Motif
Nemesis
Onomatopoeia
Oxymoron
Paradox
Pathetic Fallacy
Pathos
Personification
Point of View
Prose
Protagonist
Pun
Sarcasm
Satire
Stanza
Simile
Soliloquy
Stock Character
Symbolism
Synecdoche
Syntax
Theme
Tone
Trope
Unreliable Narrator
Utopia
Vignette
Villanelle
English literature
Literary terms
Novels
Poetry
Drama
Figurative language
Metaphor
Simile
Symbolism
Irony
Theme
Characterization
Plot
Setting
Genre
Allusion
Foreshadowing
Personification
Imagery
Stream of consciousness
Structuralism
Postmodernism
Modernism
Romanticism""".split("\n")

x = list(set(x))

tags = []
for i in x:
    i = i.strip()
    tags.append(i)

print(f"<meta name=\"keywords\" content=\"{', '.join(tags)}\">")