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
Villanelle""".split("\n")

for i in x:
    i = i.strip()
    print(f"\"{i}\": {{ \"href\": \"../{i.lower()}/index.html\", \"id\": \"{i.lower()}\" }},")
