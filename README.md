# LMSCF-Yana-Marin Project Documentation
## by Yana & Marin, Version: 1.0, 20th February 2020

## 1. Goal (Must have)
Dating site with list of potential partners to choose from and favorite. The purpose is to practice using objects, classes and subclasses.

### 1.1 User Experience (Should have)
Two Areas on the Page:
- An area with the potential partners as cards with a phrase and a photo. An option to favorite them by clicking on a heart.
- Another area below with the favorites with a photo and their personal information.

### 1.2 Nice to Have
We could add a Jumbotron promotion at the top of the page.
Gender preference (e.g. man looking for man or man looking for woman, or woman looking for man or woman looking for woman, or both).

## 2. Data Structure (Must have)
- Object class with person with the attributes:
-- Name: string
-- Age: number
-- Phrase: string
-- Photo: string
-- Location: sting
-- Hobbies: string
-- Favorite Music: string

We realize that the use of subclasses for this exercise might be considered redundant, but we want to meet the stated objective of practicing the use of subclasses for objects as well. Therefore we need *two subclasses*:
- Man
- Woman
...with the only additional attribute per subclass:
-- Favorite: boolean

## 3. Technologies
- Bootstrap
- jQuery
- TypeScript

## 4. Out of Scope (Won't have)
We will *not* use a JSON file. The data for the dating persons will be created as objects based on the classes/subclasses defined.
