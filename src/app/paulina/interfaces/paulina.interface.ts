// Generated by https://quicktype.io

export interface Recipe {
    id:             number;
    date:           string;
    date_gmt:       string;
    guid:           GUID;
    modified:       string;
    modified_gmt:   string;
    slug:           string;
    status:         StatusEnum;
    type:           Type;
    link:           string;
    title:          GUID;
    content:        Content;
    excerpt:        Content;
    author:         number;
    featured_media: number;
    comment_status: Status;
    ping_status:    Status;
    sticky:         boolean;
    template:       string;
    format:         Format;
    meta:           { [key: string]: Meta };
    categories:     number[];
    tags:           number[];
    acf:            any[];
    _links:         Links;
}

export interface Links {
    self:               About[];
    collection:         About[];
    about:              About[];
    author:             Author[];
    replies:            Author[];
    "version-history":  VersionHistory[];
    "wp:featuredmedia": Author[];
    "wp:attachment":    About[];
    "wp:term":          WpTerm[];
    curies:             Cury[];
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export enum Taxonomy {
    Category = "category",
    PostTag = "post_tag",
}

export enum Status {
    Closed = "closed",
    Open = "open",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export enum Format {
    Standard = "standard",
    Video = "video",
}

export interface GUID {
    rendered: string;
}

export enum Meta {
    Default = "default",
    Empty = "",
}

export enum StatusEnum {
    Publish = "publish",
}

export enum Type {
    Post = "post",
}