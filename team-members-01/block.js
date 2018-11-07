/*
Block Name: Kenzap Team Members #1
Description: Create team member section on your website
Author: Kenzap
Version: 1.0.0
Author URI: http://kenzap.com
License: GPL2+
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

( function( blocks, editor, i18n, element, components, _ ) {

    const { __ } = i18n;

    var el = element.createElement;
    var Fragment = element.Fragment;
	var RichText = editor.RichText;
    var MediaUpload = editor.MediaUpload;
    var InspectorControls = editor.InspectorControls;

    var RangeControl = components.RangeControl,
        PanelBody = components.PanelBody,
        PanelColorSettings = editor.PanelColorSettings,
        BaseControl = components.BaseControl,
        Dashicon = components.Dashicon,
        Tooltip = components.Tooltip,
        TextControl = components.TextControl,
        RadioControl = components.RadioControl,
        SelectControl = components.SelectControl,
        CheckboxControl = components.CheckboxControl,
        Button = components.Button;

    var iconsObj = { 
        facebook: "flaticon-021-facebook",
        instagram: "flaticon-025-instagram",
        linkedin: "flaticon-045-linkedin",
        pinterest: "flaticon-041-pinterest",
        reddit: "flaticon-042-reddit",
        twitter: "flaticon-043-twitter",
        "google-plus": "flaticon-047-google-plus",
        vk: "flaticon-020-vk",
        youtube: "flaticon-011-youtube",
        vimeo: "flaticon-027-vimeo",
        whatsapp: "flaticon-035-whatsapp",
        envelope: "flaticon-004-soundcloud",
        "envelope-o": "flaticon-004-soundcloud",
        soundcloud: "flaticon-004-soundcloud",
        tumblr: "flaticon-006-tumblr",
        vine: "flaticon-007-vine",
        slideshare: "flaticon-008-slideshare",
        xing: "flaticon-009-xing",
        skype: "flaticon-013-skype",
        twitch: "flaticon-016-twitch",
        dropbox: "flaticon-017-dropbox",
        yelp: "flaticon-018-yelp",
        digg: "flaticon-019-digg",
        dribbble: "flaticon-022-dribbble",
        rss: "flaticon-023-rss",
        delicious: "flaticon-024-delicious",
        lastfm: "flaticon-028-lastfm",
        telegram: "flaticon-029-telegram",
        flickr: "flaticon-031-flickr",
        yahoo: "flaticon-033-yahoo",
        snapchat: "flaticon-034-snapchat",
        foursquare: "flaticon-036-foursquare",
        github: "flaticon-038-github",
        deviantart: "flaticon-039-deviantart",
        spotify: "flaticon-046-spotify",
        behance: "flaticon-048-behance",
        stumbleupon: "flaticon-049-stumbleupon",
        bebo: "flaticon-050-bebo",
    };

    var bgObj = {
        "":"auto",
        "contain": "contain",
        "cover":"cover",
        "repeat":"auto"
    };

    blocks.registerBlockType( 'kenzap-kenzap-members/block-01', {
        title: 'Kenzap Team Members',
        description: __( 'List team members beautifully.' ),
        keywords: [ __( 'members' ),  __( 'users' ), __( 'people' ) ],
        icon: 'universal-access-alt',
        category: 'layout',
        anchor: true,
        html: true,
        align: true,
        align: ['left', 'right', 'full'],
        
		attributes: {
            items: {
                type: 'array',
            },
            itemsIcons: {
                type: 'array',
                default: [{ icon: '', iconID: '', iconColor: '', link: '#' }, { icon: '', iconID: '', iconColor: '', link: '#' }, { icon: '', iconID: '', iconColor: '', link: '#' }]
            },
            iconCount: {
                type: 'number',
                default: 3
            },
            avatarSize: {
                type: 'number',
                default: 150
            },
            avatarCrop: {
                type: 'boolean',
                default: true
            },
            backgroundColor: {
                type: 'string',
                default: '#ffffff'
            },
            avatarBorderColor: {
                type: 'string',
                default: '#3498db'
            },
            avatarBorderRadius: {
                type: 'number',
                default: 75
            },
            avatarBorderWidth: {
                type: 'number',
                default: 5
            },
            contAlignment:{
                type: 'string',
                default: ''
            },
            maxContWidth:{
                type: 'number',
                default: 1200
            },
            bgAlignment:{
                type: 'string',
                default: ''
            },
            textSize: {
                type: 'number',
                default: 15
            },
            textColor1: {
                type: 'string',
                default: "#252525"
            },
            textColor2: {
                type: 'string',
                default: "#909090"
            },
            textColor3: {
                type: 'string',
                default: "#b6b6b6"
            },
            iconSize: {
                type: 'number',
                default: 17
            },
            blockMargin: {
                type: 'number',
                default: 30
            },
            bgPadding: {
                type: 'number',
                default: 0
            },
			mediaID: {
				type: 'number',
			},
			mediaURL: {
                type: 'string',
                default: " "
            }, 
            currentSelected: {
                type: 'number',
                default: 0
            },
            searchedText: {
                type: 'string',
                default: ""
            },
            isSocialView: {
                type: 'boolean',
                default: false
            },
            svi: {
                type: 'number',
                default: 0
            },
            svis: {
                type: 'number',
                default: 0
            },
            hoverEffect: {
                type: 'boolean',
                default: true
            },
            backgroundImageID:{
                type: 'string',
                default: ""
            },
            backgroundImageUrl:{
                type: 'string',
                default: ""
            }
		},
		edit: function( props ) {

            var _toConsumableArray = function(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

            var attributes = props.attributes,
                setAttributes = props.setAttributes,
                avatarSize = attributes.avatarSize,
                avatarBorderColor = attributes.avatarBorderColor,
                backgroundColor = attributes.backgroundColor,
                backgroundImageID= attributes.backgroundImageID,
                backgroundImageUrl = attributes.backgroundImageUrl,
                avatarBorderRadius = attributes.avatarBorderRadius,
                avatarBorderWidth = attributes.avatarBorderWidth,
                blockMargin = attributes.blockMargin,
                bgPadding = attributes.bgPadding,
                avatarCrop = attributes.avatarCrop,
                maxContWidth = attributes.maxContWidth,
                isSelected = props.isSelected,
                textSize = attributes.textSize,
                textColor1 = attributes.textColor1,
                textColor2 = attributes.textColor2,
                textColor3 = attributes.textColor3,
                iconSize = attributes.iconSize,
                currentSelected = attributes.currentSelected,
                searchedText = attributes.searchedText,
                isSocialView = attributes.isSocialView,
                svi = attributes.svi,
                svis = attributes.svis,
                itemsIcons = attributes.itemsIcons,
                contAlignment = attributes.contAlignment,
                bgAlignment = attributes.bgAlignment,
                hoverEffect = attributes.hoverEffect,
                items = attributes.items;
                 
            var matchedIcons = Object.keys(iconsObj).filter(function (key) {
                return key.indexOf(searchedText.toLowerCase().trim()) > -1;
            });

            var addItem = function (itemsTemp){ 
                return [].concat(_toConsumableArray(itemsTemp), [{
                    title: 'Jacquel Fisher',
                    position: 'Social Media Expert',
                    icons: [{
                        type: 'facebook',
                        link: 'https://facebook.com',
                        url: '#',
                        color: ''
                    },{
                        type: 'twitter',
                        link: 'https://twitter.com',
                        url: '#',
                        color: ''
                    },{
                        type: 'linkedin',
                        link: 'https://linkedin.com',
                        url: '#',
                        color: ''
                    }],
                    mediaID: '',
                    mediaURL: ''
                }])
            }

            function arrayMove(arr, old_index, new_index) {
                while (old_index < 0) {
                    old_index += arr.length;
                }
                while (new_index < 0) {
                    new_index += arr.length;
                }
                if (new_index >= arr.length) {
                    var k = new_index - arr.length + 1;
                    while (k--) {
                        arr.push(undefined);
                    }
                }
                arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
                return arr; // for testing purposes
            };

            if (typeof items === "undefined"){
                items = [];
                items = addItem(items);
                setAttributes({ items: items }); 
            }else{
                items = _toConsumableArray(attributes.items);
            }
            
			return (
                el( Fragment,
                    null,
                    el( InspectorControls,
                        null,
                        el( PanelBody,
                            { title: __( 'General' ), initialOpen: false },
                            el(PanelColorSettings, { 
                                    title: __('Highlight Color'), 
                                    initialOpen: true,
                                    colorSettings:  [
                                        {
                                            value: avatarBorderColor,
                                            onChange: function onChange(value) {
                                                return setAttributes({ avatarBorderColor: value });
                                            },
                                            label: __('Selected'), 
                                        }
                                    ]
                                },                   
                            ),
                            el(RangeControl, {
                                label: __('Margins'),
                                value: blockMargin || '',
                                onChange: function onChange(size) {
                                    return setAttributes({ blockMargin: size });
                                },
                                min: 1,
                                max: 100,
                            }),
                            el( CheckboxControl, {
                                label: __( 'Hover effect' ),
                                checked: hoverEffect,
                                onChange: function onChange(value) {
                                    return setAttributes({ hoverEffect: value });
                                }
                            }),
                        ),
                        el( PanelBody,
                            { title: __( 'Avatar' ), initialOpen: false },
                            el( RangeControl, {
                                label: __( 'Avatar Size' ),
                                min: 100,
                                max: 500,
                                value: avatarSize,
                                onChange: function onChange(value) {
                                    return setAttributes({ avatarSize: value });
                                }
                            }),
                            el( CheckboxControl, {
                                label: __( 'Crop avatar' ),
                                checked: avatarCrop,
                                onChange: function onChange(value) {
                                    return setAttributes({ avatarCrop: value });
                                }
                            }),
                            avatarCrop && el(RangeControl, {
                                label: __('Border Radius'),
                                min: 0,
                                max: (avatarSize/2),
                                value: avatarBorderRadius,
                                onChange: function onChange(value) {
                                    return setAttributes({ avatarBorderRadius: value });
                                }
                            }),
                            avatarCrop && el(RangeControl, {
                                label: __('Border Width'),
                                min: 0,
                                max: 10,
                                value: avatarBorderWidth,
                                onChange: function onChange(value) {
                                    return setAttributes({ avatarBorderWidth: value });
                                }
                            }),
                        ),
                        el( PanelBody,
                            { title: __( 'Text' ), initialOpen: false },
                            el(RangeControl, {
                                label: __('Text size'),
                                value: textSize || '',
                                onChange: function onChange(size) {
                                    return setAttributes({ textSize: size });
                                },
                                min: 10,
                                max: 40,
                                beforeIcon: 'editor-textcolor',
                                allowReset: true
                            }),
                            el( PanelColorSettings, { 
                                title: __('Text name color'), 
                                initialOpen: true,
                                colorSettings: [
                                    {
                                        value: textColor1,
                                        onChange: function onChange(value) {
                                            return setAttributes({ textColor1: value });
                                        },
                                        label: __('Selected'), 
                                    }
                                ]
                            }),
                            el( PanelColorSettings, { 
                                title: __('Text position color'), 
                                initialOpen: true,
                                colorSettings: [
                                    {
                                        value: textColor2,
                                        onChange: function onChange(value) {
                                            return setAttributes({ textColor2: value });
                                        },
                                        label: __('Selected'), 
                                    }
                                ]
                            }),
                        ),
                        isSocialView && el( PanelBody,
                            { title: __('Social Icons - ') + ((items[svi].title.replace(/<(?:.|\n)*?>/gm, '').length > 18) ? items[svi].title.replace(/<(?:.|\n)*?>/gm, '').substring(0,18) + '..' : items[svi].title.replace(/<(?:.|\n)*?>/gm, '')) },
                            isSocialView && el( RangeControl, {
                                label: __('Number of Icons'),
                                min: 0,
                                max: 10,
                                value: items[svi].icons.length,
                                help: __('Please first click on team member you want to start editing.'),
                                onChange: function onChange(value) {
                                                        
                                    //add social network icon
                                    if ( value > items[svi].icons.length ){
                                        var temp = [].concat(_toConsumableArray(items[svi].icons), [{
                                                type: 'facebook',
                                                link: 'http://facebook.com',
                                                url: '#',
                                                color: ''
                                            }]
                                        )
                                        items[svi].icons = temp;
                                        if ( svis<=0 ){ svis++; }
                                    }

                                    //remove social network icon
                                    if ( value < items[svi].icons.length ){
                                        var temp = items[svi].icons.slice(0, value);;
                                        items[svi].icons = temp;
                                    }

                                    //decrease index if last icon was selected
                                    if ( svis >= items[svi].icons.length ){
                                        svis = items[svi].icons.length-1;
                                    }

                                    return setAttributes({ iconCount: value, items: items, svis: svis });
                                }
                            }),
                            el(RangeControl, {
                                label: __('Icon Size'),
                                value: iconSize || '',
                                onChange: function onChange(size) {
                                    return setAttributes({ iconSize: size });
                                },
                                min: 15,
                                max: 60,
                            }),
                            el( PanelColorSettings, { 
                                title: __('Social icon color'), 
                                initialOpen: true,
                                colorSettings: [
                                    {
                                        value: textColor3,
                                        onChange: function onChange(value) {
                                            return setAttributes({ textColor3: value });
                                        },
                                        label: __('Selected'), 
                                    }
                                ]
                            }),
                            (isSocialView && (svis >= 0)) && el( TextControl, {
                                type: 'url',
                                label: "" + (svis + 1) + ". " + __('Social Network Link'),
                                value: ((typeof items[svi].icons[svis] === "undefined")?"#":items[svi].icons[svis].link),
                                onChange: function onChange(value) {

                                    items[svi].icons[svis].link = value;
                                    return setAttributes( {
                                        items: items,
                                        mediaID: value
                                    } );
                                }
                                ,help: __( 'Click on social network icon to change its settings.' ),
                            }),
                            (isSocialView && (svis >= 0)) && el(TextControl, {
                                label: "" + (svis + 1) + ". " + __('Social Network Icon'),
                                placeholder: __('Type here to search…'),
                                value: searchedText,
                                onChange: function onChange(value) {
                                    return setAttributes({ searchedText: value });
                                }
                            }),
                            (isSocialView && (svis >= 0)) && el(
                                "div",
                                { className: "kenzap-members-icon-cont" },
                                matchedIcons.map(function (key, index) {
                                    return el(
                                        "div",
                                        { className: "kenzap-members-icon-item", key: index },
                                        (typeof items[svi].icons[svis] !== "undefined") && el(
                                            Tooltip,
                                            { text: key },
                                            el(
                                                "i", { 
                                                className: "fa fa-"+key+" "+(key === items[svi].icons[svis].type ? 'active' : ''), 
                                                style: {
                                                    "--hcolor": avatarBorderColor,
                                                    "--icolor": textColor3, 
                                                },
                                                onClick: function onClick() {

                                                    items[svi].icons[svis].type = key;
                                                    setAttributes({ items: items, mediaID: key });
                                                } 
                                                },
                                            )
                                        )
                                    );
                                }),
                                el(
                                    BaseControl,
                                    { label: __('Custom icon') },
                                    el(MediaUpload, {
                                        value: itemsIcons[currentSelected].iconID,
                                        onSelect: function onSelect(media) {

                                            items[svi].icons[svis].type = "custom";
                                            items[svi].icons[svis].url = media.sizes.thumbnail.url;      
                                            setAttributes({ items: items, mediaID: media.id });
                                        },
                                        render: function render(_ref) {
                                            var open = _ref.open;
                                            return el( Fragment,
                                                null,
                                                el( Button, {
                                                    className: "button button-large",
                                                    onClick: open
                                                },
                                                __('Upload/Choose')
                                                )
                                            );
                                        }
                                    })
                                )
                            )
                        ),
                        el( PanelBody,
                            { title: __( 'Background' ), initialOpen: false },
                            el( PanelColorSettings, { 
                                    title: __('Background Color'), 
                                    initialOpen: true,
                                    colorSettings:  [
                                        {
                                            value: backgroundColor,
                                            onChange: function onChange(value) {
                                                return setAttributes({ backgroundColor: value });
                                            },
                                            label: __('Selected'), 
                                        }
                                    ]
                                },                   
                            ),
                            el( BaseControl,
                                { label: __('Background image'),
                                help: __('Override background color with image. Transparent images may also apply.'), },
                                el(MediaUpload, {
                                    value: backgroundImageID,
                                    onSelect: function onSelect(media) {
                                        setAttributes({ backgroundImageUrl: media.url, backgroundImageID: media.id });
                                    },
                                    render: function render(_ref) {
                                        var open = _ref.open;
                                        return el( "div",
                                            {},
                                            !backgroundImageUrl && el( Button, {
                                                    className: "button button-large",
                                                    onClick: open
                                                },
                                                __('Upload/Choose')
                                            ),
                                            backgroundImageUrl && el( Button, {
                                                    className: "button button-large",
                                                    onClick: function onClick(el) {
                                                        setAttributes({ backgroundImageUrl: "", backgroundImageID: "" });
                                                    }
                                                },
                                                __('Remove')
                                            ),
                                            backgroundImageUrl && el( "img", {
                                                    src: backgroundImageUrl,
                                                    className: "bg-preview",
                                                    onClick: open
                                                }
                                            ),
                                        )
                                    }
                                })
                            ),
                            el(SelectControl, {
                                label: __('Background style'),
                                value: bgAlignment,
                                options: [
                                    { label: 'Default', value: '' },
                                    { label: 'Contain', value: 'contain' },
                                    { label: 'Cover', value: 'cover' },
                                    { label: 'Repeated', value: 'repeat' },
                                ],
                                help: __('Choose how to align background image'),
                                onChange: function setState(value) {
                                    return setAttributes({ bgAlignment: value });
                                },
                            }),
                            el(RadioControl, {
                                label: __('Alignment'),
                                selected: contAlignment,
                                options: [
                                    { label: 'Default', value: '' },
                                    { label: 'Full Width', value: 'fullwidth' },
                                ],
                                help: __('Full Width may not work properly with all layout types including layouts with sidebars.'),
                                onChange: function setState(value) {
                                    return setAttributes({ contAlignment: value });
                                },
                            }),
                            contAlignment == 'fullwidth' && el(RangeControl, {
                                label: __('Max width'),
                                value: maxContWidth || '',
                                onChange: function onChange(size) {
                                    return setAttributes({ maxContWidth: size });
                                },
                                help: __('Restrict the layout width for content children.'),
                                min: 500,
                                max: 1500,
                            }),
                            el(RangeControl, {
                                label: __('Top and bottom paddings'),
                                value: bgPadding || 0,
                                onChange: function onChange(size) {
                                    return setAttributes({ bgPadding: size });
                                },
                                help: __('Useful when you want to extend backround image vertical size.'),
                                min: 0,
                                max: 100,
                            }),
                        ),
                    ),
                    el(
                        "div",
                        { className: "kenzap-members-editor",
                        style: {
                            backgroundColor: backgroundColor,
                            backgroundImage: backgroundImageUrl=="" ? "none" : ('url('+backgroundImageUrl+')'),
                            backgroundSize: bgObj[bgAlignment],
                            backgroundRepeat: (bgAlignment == 'repeat')?bgAlignment:"no-repeat",
                        }
                        },
                        items.map(function (item, index) {
                            return el(
                                "div",
                                { className: "member-block" },
                                el(
                                    Fragment,
                                    { key: index },
                                    el( "div", { 
                                        className: hoverEffect ? "member-info member-hover":"member-info",
                                        style: {
                                            marginLeft: blockMargin,
                                            marginRight: blockMargin,
                                        },
                                        onClick: function onClick() {
                                                    
                                            return setAttributes({ 
                                                isSocialView: true,
                                                svi:index,
                                            });
                                        }
                                    },
                                        el( 'div', { 
                                            className: 'member-image',
                                            style: {
                                                    width: avatarCrop ? avatarSize : 'auto',
                                                    height: avatarSize + 'px',
                                                    borderWidth: avatarCrop ? avatarBorderWidth : 0,
                                                    borderRadius: avatarBorderRadius + 'px',
                                                    borderColor: avatarBorderColor,
                                                },
                                            },
                                            el( MediaUpload, {
                                                onSelect: function( media ) {

                                                    items[index].mediaID = media.id;
                                                    items[index].mediaURL = media.url;
                                                    return setAttributes( {
                                                        items: items,
                                                        mediaID: media.id
                                                    } );
                                                   
                                                },
                                                value: items[index].mediaID,
                                                render: function( obj ) {

                                                    return el( components.Button, {
                                                            className: items[index].mediaID ? 'image-button' : 'button button-visible',
                                                            onClick: obj.open
                                                        },
                                                        ! items[index].mediaID ? __( 'Upload Avatar' ) : el( 'img', { 
                                                            className: 'avatar',
                                                            src: items[index].mediaURL,
                                                            style: {
                                                                width: avatarCrop ? (avatarSize-(avatarBorderWidth*2) + 'px') : 'auto',
                                                                height: avatarSize-(avatarBorderWidth*2) + 'px',
                                                                borderRadius: avatarCrop ? (avatarBorderRadius-(avatarBorderWidth) + 'px') : 0,
                                                            }
                                                        } )
                                                    );
                                                }
                                            } )
                                        ),
                                        el( RichText, {
                                            tagName: "h3",
                                            value: items[index].title,
                                            style: {
                                                fontSize: textSize*1.2 + 'px',
                                                marginBottom: textSize - 5 + 'px',
                                                paddingTop: textSize*1.1 - 18 + 'px',
                                                color: textColor1,
                                            },
                                            onChange: function onChange(value) {
                                            
                                                var itemsTemp = items;
                                                itemsTemp[index].title = value;
                                                return setAttributes( {
                                                    items: itemsTemp,
                                                    mediaURL: value,
                                                } );
                                            },
                                            onSplit: function onSplit() {
                                                return null;
                                            },
                                            placeholder: __('Full Name')
                                        }),
                                        el( RichText, {
                                            tagName: "p",
                                            value: items[index].position,
                                            style: {
                                                fontSize: textSize + 'px',
                                                marginBottom: textSize + 'px',
                                                color: textColor2,
                                            },
                                            onChange: function onChange(value) {

                                                items[index].position = value;
                                                return setAttributes( {
                                                    items: items,
                                                    mediaID: ""
                                                } );
                                            },
                                            onSplit: function onSplit() {
                                                return null;
                                            },
                                            placeholder: __('Position')
                                        }),
                                        el(
                                            "ul", {
                                            className: "member-social",
                                            style: {
                                                marginTop: iconSize/2+5,
                                            },
                                            },
                                            items[index].icons.map(function (item, indexs) {
                                                return el(
                                                    "li", { 
                                                        className: "member-li",
                                                        style: {
                                                            paddingLeft: iconSize/3,
                                                            paddingRight: iconSize/3,
                                                        },
                                                        onClick: function onClick() {
                                                            
                                                            return setAttributes({ 
                                                                isSocialView: true,
                                                                svi:index,
                                                                svis:indexs,
                                                            });
                                                        }
                                                    },
                                                    el(
                                                        Fragment,
                                                        { key: indexs },
                                                        el(
                                                            "a", { 
                                                                className: "member-a",
                                                            },
                                                            items[index].icons[indexs].type ==  'custom' && el(
                                                                "img", {
                                                                    src: items[index].icons[indexs].url,
                                                                    style: {
                                                                        width: "auto",
                                                                        height: iconSize,
                                                                        "--hcolor": avatarBorderColor, 
                                                                        "--icolor": textColor3, 
                                                                    }
                                                                },
                                                            ),
                                                            items[index].icons[indexs].type != 'custom' &&  el(
                                                                "i",
                                                                { className: "fa fa-"+items[index].icons[indexs].type,
                                                                    style: {
                                                                        width: iconSize,
                                                                        fontSize: iconSize,
                                                                        "--hcolor": avatarBorderColor, 
                                                                        "--icolor": textColor3, 
                                                                    }
                                                                },
                                                            )
                                                        )
                                                    )
                                                )
                                            })
                                        ),
                                        el(
                                            Tooltip,
                                            { text: __('Remove item') },
                                            el(
                                                "span",
                                                { className: "member-remove",
                                                    onClick: function onClick() {

                                                        //decrease current member index before block removal
                                                        svi = 0;
                                                        isSocialView = false;

                                                        //without timeout conflicks with other onclick events and resets svi
                                                        setTimeout(function(){

                                                            //remove selected (index) element
                                                            return setAttributes({ isSocialView: isSocialView, svi: svi, items: items.filter(function (cItem, cIndex) {
                                                                return cIndex !== index;
                                                            }) });
                                                        },100);
                                                    }
                                                },
                                                el( Dashicon, { icon: "no" })
                                            )
                                        ),
                                        index != 0 && el(
                                            Tooltip,
                                            { text: __('Move left') },
                                            el(
                                                "span",
                                                { className: "member-left",
                                                    onClick: function onClick() {

                                                        //decrease current member index before block removal
                                                        isSocialView = false;

                                                        //without timeout conflicks with other onclick events and resets svi
                                                        setTimeout(function(){

                                                            //remove selected (index) element
                                                            return setAttributes({ isSocialView: isSocialView, svi: svi, items: arrayMove(items, index, index-1) });
                                                        },100);
                                            
                                                    }
                                                },
                                                el( Dashicon, { icon: "arrow-left" })
                                            )
                                        ),
                                        index+1 < items.length && el(
                                            Tooltip,
                                            { text: __('Move right') },
                                            el(
                                                "span",
                                                { className: "member-right",
                                                    onClick: function onClick() {

                                                        //decrease current member index before block removal
                                                        isSocialView = false;

                                                        //without timeout conflicts with other onclick events and resets svi
                                                        setTimeout(function(){

                                                            //remove selected (index) element
                                                            return setAttributes({ isSocialView: isSocialView, svi: svi, items: arrayMove(items, index, index+1) });
                                                        },100);
                                            
                                                    }
                                                },
                                                el( Dashicon, { icon: "arrow-right" })
                                            )
                                        ),
                                    ),
                                )
                            );
                        })
                    ),
                    isSelected && el(
                        "div",
                        { className: "member-controls" },
                        el(
                            "button",
                            { className: "button button-large",
                                onClick: function onClick() {
                                    console.log("adding");
                                    return setAttributes({
                                        items: addItem(items)
                                    });
                                }
                            },
                            __('Add item')
                        )
                    )
                )
            );
		},
		save: function( props ) {

            var attributes = props.attributes,
                avatarSize = attributes.avatarSize,
                avatarCrop = attributes.avatarCrop,
                avatarBorderColor = attributes.avatarBorderColor,
                backgroundColor = attributes.backgroundColor,
                avatarBorderRadius = attributes.avatarBorderRadius,
                avatarBorderWidth = attributes.avatarBorderWidth,
                backgroundImageID = attributes.backgroundImageID,
                maxContWidth = attributes.maxContWidth,
                backgroundImageUrl = attributes.backgroundImageUrl,
                bgAlignment = attributes.bgAlignment,
                blockMargin = attributes.blockMargin,
                bgPadding = attributes.bgPadding,
                textSize = attributes.textSize,
                textColor1 = attributes.textColor1,
                textColor2 = attributes.textColor2,
                textColor3 = attributes.textColor3,
                iconSize = attributes.iconSize,
                mediaURL = attributes.mediaURL,
                contAlignment = attributes.contAlignment,
                hoverEffect = attributes.hoverEffect,
                items = attributes.items;

			return (
                el(
                    "section", { 
                        className: "kenzap-members "+contAlignment,
                        style: {
                            backgroundColor: backgroundColor,
                            backgroundImage: backgroundImageUrl=="" ? "none" : ('url('+backgroundImageUrl+')'),
                            backgroundSize: bgObj[bgAlignment],
                            backgroundRepeat: (bgAlignment == 'repeat')?bgAlignment:"no-repeat",
                            paddingTop: bgPadding,
                            paddingBottom: bgPadding,
                        }
                    },
                    el(
                        "div", { 
                            className: "team-cont", 
                            style: {
                                maxWidth: maxContWidth,
                            }
                        },
                        items.map(function (item, index) {
                            return el(
                                "div",
                                { className: "member-block" },
                                el(
                                    Fragment,
                                    { key: index },
                                    el(
                                        "div",
                                        { className: hoverEffect ? "member-info member-hover":"member-info",
                                            style: {
                                                marginLeft: blockMargin,
                                                marginRight: blockMargin,
                                            }
                                        },
                                        //load image
                                        items[index].mediaURL &&
                                        el( 'img', { 
                                            className: "avatar_front",
                                            src: items[index].mediaURL,
                                            style: {
                                                width: avatarCrop ? avatarSize: 'auto',
                                                height: avatarSize,
                                                borderWidth: avatarCrop ? avatarBorderWidth : 0,
                                                borderRadius: avatarCrop ? (avatarBorderRadius+avatarBorderWidth) : 0,
                                                borderColor: avatarBorderColor,
                                            }, 
                                        }),
                                        //no image specified load avatar in div
                                        !items[index].mediaURL &&
                                        el( 'div', { 
                                            className: "avatar_placeholder",
                                            style: {
                                                width: avatarSize,
                                                height: avatarSize,
                                                borderWidth: avatarCrop ? avatarBorderWidth : 0,
                                                borderRadius: avatarCrop ? (avatarBorderRadius+avatarBorderWidth) : 0,
                                                borderColor: avatarBorderColor,
                                            }, 
                                        }),
                                        el(RichText.Content, {
                                            tagName: "h3",
                                            value: items[index].title,
                                            style: {
                                                fontSize: textSize*1.2,
                                                marginBottom: textSize - 5,
                                                marginTop: textSize*1.1 - 18,
                                                color: textColor1,
                                            },
                                        }),
                                        items[index].position != '' && el( RichText.Content, {
                                            tagName: "p",
                                            value: items[index].position,
                                            style: {
                                                fontSize: textSize,
                                                marginBottom: textSize,
                                                color: textColor2,
                                            },
                                        }),
                                        el(
                                            "ul", {
                                            className: "member-social",
                                            },
                                            items[index].icons.map(function (item, indexs) {
                                                return el(
                                                    "li", { 
                                                        className: "member-li",
                                                        style: {
                                                            paddingLeft: iconSize/3,
                                                            paddingRight: iconSize/3,
                                                        },
                                                    },
                                                    el(
                                                        Fragment,
                                                        { key: indexs },
                                                        el(
                                                            "a", { 
                                                                className: "member-a",
                                                                href: ((typeof items[index].icons[indexs] === "undefined")?"#":items[index].icons[indexs].link),
                                                                target: "_blank"
                                                            },
                                                            items[index].icons[indexs].type ==  'custom' && el(
                                                                "img", {
                                                                    src: items[index].icons[indexs].url,
                                                                    style: {
                                                                        width: "auto",
                                                                        height: iconSize,
                                                                        "--hcolor": avatarBorderColor, 
                                                                    }
                                                                },
                                                            ),
                                                            items[index].icons[indexs].type !=  'custom' && el(
                                                                "i", {   
                                                                    className: "fa fa-"+items[index].icons[indexs].type,
                                                                    style: {
                                                                        width: iconSize,
                                                                        fontSize: iconSize,
                                                                        "--hcolor": avatarBorderColor, 
                                                                        "--icolor": textColor3,
                                                                    }
                                                                },
                                                            )
                                                        )
                                                    )
                                                )
                                            })
                                        ),
                                    ),
                                )
                            );
                        })
                    )
                )               
			);
		},
	} );

} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
);