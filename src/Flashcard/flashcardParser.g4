/*
  flashcard grammar
     Sep 15, 2020  by Yoshi Noda

Issues:
1)   ':' '&' and ']' in word not accepted.

2) 

3) Bracket escaping = [] inside sentences
   e.g.* Ich habe die __(deutsche)__ Staatsbürgerschaft. Ich bin __(Deutsche[r]). __

4) It gets really slow to parse lines line this
  => Modified the grammar and now it is not that slow.

*/

parser grammar flashcardParser;

options { tokenVocab = flashcardLexer; }


bitmark: ( bitmark_ ( S* NL )* )+ NL* EOF ;

bitmark_:
	  flashcards
	| vocab			  // added 5.11.2021
	| vocab_1		  // added 5.11.2021
;
flashcards:
	  flashcard
	| flashcard_1
	| flashcard_set	          // added 9/2/2020
	| flashcard_language_set  // added 9/2/2020
	| flashcard_language_1    // added 9/2/2020
;
//
flashcard_1:
    BitFlash1 format CL NL side (EQ|EQ2) side NL* ( resource (NL* resource)* )?
;
flashcard:
    BitFlash  format CL NL* (HSPL|HSPL2) side (EQ|EQ2) side 
       	   ( (HSPL|HSPL2) side (EQ|EQ2) side )* (HSPL|HSPL2) NL* ( resource (NL* resource)* )?
;
flashcard_set: 	          // added 9/2/2020
    BitFlashcardset  format CL NL* ( (HSPL|HSPL2) side (EQ|EQ2) side )?
       	   ( (HSPL|HSPL2) side (EQ|EQ2) side ( NL OR side )* )* (HSPL|HSPL2) NL* ( resource (NL* resource)* )?
;
flashcard_language_set:  // added 9/2/2020
    BitFlashcardlangset  format CL NL* sidex_NL
          ( (HSPL|HSPL2) sidex ( NL sidex_NL ) ( (EQ|EQ2) sidex_NL )+ )+ (HSPL|HSPL2) NL* ( resource (NL* resource)* )?
;
flashcard_language_1:    // added 9/2/2020
    BitFlashcardlang1  format CL NL* sidex_NL
           (EQ|EQ2) sidex ( NL sidex_NL ) ( OR sidex_NL )+  NL* ( resource (NL* resource)* )?
;

vocab:
    BitVocabulary format CL NL* ( bitElem NL* )*
      ( ( HSPL|HSPL2 ) vside+ ( (EQ|EQ2) vside+ )* )+
      (HSPL|HSPL2) NL*
      ( resource (NL* resource)* )?
;

vocab_1:
    BitVocabulary_1 format CL NL* ( bitElem NL* )*
      (EQ|EQ2) vside+ ( OR vside+ )* ( OR resource (NL* resource)* )?
;

sx:   atdef | s_and_w | instruction | imagebit | audiobit ;

sidex:   sx ( NL? sx )* ;

sidex_NL:   bitElem NL* ;

side:     sidex ( OR sidex )* ;

side_NL:  sidex_NL ( OR sidex_NL )* ;

vside:    sidex_NL ;

//
bitElem:
     LIST_LINE
   | NOTBITMARK
   | gap
   | atdef
   | reference 
   | item
   | title
   | instruction 
   | hint
   | s_and_w 
   | example
   | bool_label
   | imagebit 
   | audiobit 
   | videobit 
   | articlebit | documentbit | appbit | websitebit
   | stillimagefilmbit  // added 8/18/2021
   | angleref     // [►]
   | anchor       // [▼]
   | sp		// cuts the chained bits
;

resource:
    bitElem
;

// [_string ( ' ' string )*]
// Chained bits following don't have the space between them.
gap:
    single_gap ( single_gap|instruction|hint|item|example )*
;

single_gap:
    OPU ( NUMERIC | STRING | /*nil*/ ) s_and_w* clnsp
;

bullet_item:
    OPBUL s_and_w CL ( atpoint )?
;

//<<<<<<<<<<<<<<<<<<<<<<<start common
// [@point:number]
atpoint:
    AtPoints NUMERIC CL
;
// videoLink, audioLink are draft state as of Aug 20,2021
format:
 ( resource_format )* ( ColonText | ColonJson | resource_format_extra )*
;
resource_format:
   BitmarkMinus | BitmarkPlus | Prosemirror | Placeholder | ColonJson 
 | AmpArticle | AmpDocument 
 | AmpWebsite | AmpStillImageFilm
 | AmpAudioLink | AmpImageLink | AmpVideoLink | AmpArticleLink
 | AmpDocumentLink | AmpAppLink | AmpWebsiteLink | AmpStillImageFilmLink
 | AmpVideoEmbed | AmpAudioEmbed | AmpDocumentEmbed
 | AmpDocumentEmbed | AmpStillImageFilmEmbed
 | AmpDocumentDownload
 ;
 
resource_format_extra:
   image_format | audio_format | video_format | article_format
  | document_format | app_format | website_format | stillimagefilm_format
  | AmpPdf
;

format2:
   BitmarkMinus | BitmarkPlus | ColonText | ColonJson | /*nil*/
;

//
//
image_format:  // No [ included
    AmpImage  (( Image_type ) | ( DotArticleAtt ))?
  | AmpImageLink ( Image_type )?
  | AmpImageZoom ( Image_type )?
  | AmpImageWAudio
  ;
video_format:    (AmpVideo | AmpVideoLink | AmpVideoEmbed) ( COLON Video_type )? ;
article_format:  AmpArticle | AmpArticleLink ;
document_format: AmpDocument | AmpDocumentLink | AmpDocumentDownload | AmpDocumentEmbed ;
app_format:      AmpApp | AmpAppLink  ;
website_format:  AmpWebsite | AmpWebsiteLink  ;
stillimagefilm_format: AmpStillImageFilm | AmpStillImageFilmLink | AmpStillImageFilmEmbed;

op_article_format:  OpAmpArticleLink | OpAmpArticle ;
op_document_format: OpAmpDocumentLink | OpAmpDocument
		    | OpAmpDocumentDownload | OpAmpDocumentEmbed ;
op_app_format:      OpAmpApp | OpAmpAppLink  ;
op_website_format:  OpAmpWebsite | OpAmpWebsiteLink ;
op_video_format:    OpAmpVideo ( COLON Video_type )? 
		  | OpAmpVideoLink ( COLON Video_type )?
		  | OpAmpVideoEmbed ( COLON Video_type )?
;
op_stillimagefilm_format: OpAmpStillImageFilm
		  | OpAmpStillImageFilmLink | OpAmpStillImageFilmEmbed ;

articlebit:   op_article_format COLON url CL 
	    | ArticleText
;

documentbit: op_document_format  COLON url CL ( OPATALT words CL )? ;
websitebit:  op_website_format   COLON url CL ( OPATALT words CL )? ;
appbit:      op_app_format COLON ( url | telephone ) CL ( OPATALT words CL )? ;

stillimagefilmbit: stillimg_one ( resource_chained )* ;
stillimg_one: op_stillimagefilm_format COLON S* url CL ;

videobit:    video_one ( resource_chained )* ;
video_one:   op_video_format  COLON url CL ( OPATALT words CL )? ;

// [&image:...]
imagebit:    image_one ( image_chained )* ( NL ShowInIndex )? ;
image_one:   op_image_format COLON S* url CL ;

op_image_format:
    OpAmpImage  (( Image_type ) | ( DotArticleAtt ))?
  | OpAmpImageLink ( Image_type )?
  | OpAmpImageZoom ( Image_type )?
  | OpAmpImageWAudio
;
image_chained:
    AtSrc COLON url CL | (AtWidth | AtHeight) COLON NUMERIC CL
  | ( OPATALT | OpAtCaption | OpAtSearch | OpAtLicense | OpAtCopyright ) .*? CL
;
image_chained4match:
    AtSrc COLON url CL | (AtWidth | AtHeight) COLON NUMERIC CL 
  | ( OPATALT | OpAtCaption | OpAtSearch | OpAtLicense | OpAtCopyright ) .*? CL
;
audiobit:    audio_one ( resource_chained )* ;
audio_one:   op_audio_format  COLON url CL ( OPATALT words CL )? ;

audio_format:
    AmpAudio ( COLON Audio_type )? 
  | AmpAudioLink ( COLON Audio_type )? 
;
op_audio_format:
    OpAmpAudio ( COLON Audio_type )? 
  | OpAmpAudioLink ( COLON Audio_type )?
  | OpAmpAudioEmbed ( COLON Audio_type )?
;

// Aug 8,2021 added
resource_chained:
   ( OPA s_and_w | AtSrc ) COLON S* (s_and_w|NL)+  CL
 | ( AtWidth | AtHeight ) COLON NUMERIC CL 
 | ( OPATALT | OpAtCaption | OpAtSearch | OpAtLicense | OpAtCopyright ) .*? CL
;

telephone:   TEL PLUS NUMERIC ;

url: URL ;

item:   OPC CL ( S* lead )?
      | OPC s_and_w (COLON|s_and_w)* CL ( S* lead )? 
;
lead:   OPC s_and_w (COLON|s_and_w)* CL ;

angleref:
      OPRANGLES  s_and_w? CL
    | OPRANGLEL  s_and_w? CL
;

// --------- 2/11/2022 -- added below ---------
example:
      AtExamplecl          // above will not work
    | AtExampleWithStr
    | AtExamplecol SENTENCE? EOF
;
bracketed_text:
    BracEnclose s_and_w? ( s_and_w ( NL S* )* NL* )* CL
  | BracEnclose ( s_and_w | NL | S )* EOF
;
reference:
      AtReference ( s_and_w | COLON | URL | NL )+  CL 
   |  AtReference ( s_and_w | COLON | URL | NL | S )* EOF
;
progress:
    AtProgress s_and_w  CL
;
dateprop:
    AtDate  (s_and_w|COLON|NL)+  CL ( dateprop_chained )?
;
dateprop_chained:
    AtDate  (s_and_w|COLON|NL)+  CL
;


// Instruction
instruction:
//    OPB NL* s_and_w? ( s_and_w ( NL S* )* NL* )* CL
    OPB NL* s_and_w* ( NL* s_and_w+ ( NL S* )* NL* )* CL   // added ( NL 
  | OPB NL* s_and_w? EOF
;
// Hint
hint:
    OPQ ~( CL )+ CL
;
title:
    OPHASH (s_and_w|NL)+ CL 
  | OPHASH s_and_w EOF
;
bool_label:
    AtLabeltrue  s_and_w CL
  | AtLabelfalse s_and_w CL
;
progress_points:
    AtProgressPoints COLON NUMERIC CL
  | AtProgressPoints COLON s_and_w CL    // Error
;

istracked:
    OpAtIsTracked s_and_w CL  // checks true false in the listener
;
isinfoonly:	 
    OpAtIsInfoOnly s_and_w CL  // checks true false in the listener
;


// [@language:en]
atdef:  atdef_ ( NL* atdef_ )*
;
// Chained atdef like [@age:1][@age:100],
// [@language:en][@language:jp][@language:cn]
atdef_:
     OPA s_and_w (COLON|DBLCOLON) s_and_w (NL|COLON|s_and_w)* CL
   | OpAtCopyright .*? CL
   | AtSampleSolution
;

dollarans:
    OPDOLL ( s_and_w | COLON | NL )+ CL
  | OPDOLL ( s_and_w | COLON | NL )* EOF
;

anchor:  OPDANGLE s_and_w? CL ;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end common


dcolon: DBLCOLON ;

//
lines: 
  ( s_and_w NL? )+
;

s_and_w:  
	   STRING ( S+ NUMERIC )?  // string=STRING
	 | words ( S+ NUMERIC )?   // words=SENTENCE
	 | OPS s_and_w CL
	 | NUMERIC
	 | S* COLON S*
	 | '&' S* | URL
;


clnsp:		CL ;  // without spaces
sspl:		SSPL|SSPL2 ;

words:          ( SENTENCE
		| NOTBITMARK
		| BARSTRING | ELIPSIS
		| AMP | Greater ~(Greater) | Less ~(Less) 
		| RightArrow | RightAngle
		)+ ;
sp: 		S ;


// ---------END of grammar-------------------------------------------------------------
