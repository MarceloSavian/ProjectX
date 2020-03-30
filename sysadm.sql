--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: advocacy; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.advocacy (
    idadvocacy integer NOT NULL,
    nameadvocacy character varying(200) NOT NULL,
    addressadvocacy character varying(200),
    cityadvocacy character varying(50),
    bairroadvocacy character varying(50),
    ufadvocacy character varying(2),
    phoneadvocacy character varying(50),
    cnpjadvocacy character varying(50),
    statusadvocacy integer,
    latitudeadvocacy double precision,
    longitudeadvocacy double precision
);


ALTER TABLE public.advocacy OWNER TO sysadm;

--
-- Name: advocacy_idadvocacy_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.advocacy_idadvocacy_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.advocacy_idadvocacy_seq OWNER TO sysadm;

--
-- Name: advocacy_idadvocacy_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.advocacy_idadvocacy_seq OWNED BY public.advocacy.idadvocacy;


--
-- Name: advocacycustomer; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.advocacycustomer (
    idadvocacyfk integer NOT NULL,
    idcustomerfk integer NOT NULL
);


ALTER TABLE public.advocacycustomer OWNER TO sysadm;

--
-- Name: advocacyuserroleright; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.advocacyuserroleright (
    idadvocacyfk integer NOT NULL,
    idrolerightsfk integer NOT NULL,
    idutilizerfk integer NOT NULL
);


ALTER TABLE public.advocacyuserroleright OWNER TO sysadm;

--
-- Name: arealitigation; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.arealitigation (
    idarealitigation integer NOT NULL,
    namearealitigation character varying(100) NOT NULL,
    descriptionarealitigation character varying(100) NOT NULL
);


ALTER TABLE public.arealitigation OWNER TO sysadm;

--
-- Name: arealitigation_idarealitigation_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.arealitigation_idarealitigation_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.arealitigation_idarealitigation_seq OWNER TO sysadm;

--
-- Name: arealitigation_idarealitigation_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.arealitigation_idarealitigation_seq OWNED BY public.arealitigation.idarealitigation;


--
-- Name: cashflow; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.cashflow (
    idcashflow integer NOT NULL,
    idcashierpk integer,
    closedat timestamp without time zone NOT NULL,
    openedat timestamp without time zone NOT NULL,
    closedbypk integer,
    openedbypk integer,
    initialcash real NOT NULL,
    finalcash real NOT NULL,
    totalfinalcash real NOT NULL,
    statuscashflow boolean NOT NULL
);


ALTER TABLE public.cashflow OWNER TO sysadm;

--
-- Name: cashflow_idcashflow_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.cashflow_idcashflow_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cashflow_idcashflow_seq OWNER TO sysadm;

--
-- Name: cashflow_idcashflow_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.cashflow_idcashflow_seq OWNED BY public.cashflow.idcashflow;


--
-- Name: cashier; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.cashier (
    idcashier integer NOT NULL,
    idadvocacypk integer NOT NULL,
    namecachier character varying(100) NOT NULL,
    currentmoney real,
    statuscashier boolean
);


ALTER TABLE public.cashier OWNER TO sysadm;

--
-- Name: cashier_idadvocacypk_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.cashier_idadvocacypk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cashier_idadvocacypk_seq OWNER TO sysadm;

--
-- Name: cashier_idadvocacypk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.cashier_idadvocacypk_seq OWNED BY public.cashier.idadvocacypk;


--
-- Name: cashier_idcashier_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.cashier_idcashier_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cashier_idcashier_seq OWNER TO sysadm;

--
-- Name: cashier_idcashier_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.cashier_idcashier_seq OWNED BY public.cashier.idcashier;


--
-- Name: customer; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.customer (
    idcustomer integer NOT NULL,
    namecustomer character varying(200) NOT NULL,
    cpfcustomer character varying(50) NOT NULL,
    rgcustomer character varying(50) NOT NULL,
    emailcustomer character varying(150),
    phonecustomer character varying(50),
    adresscustomer character varying(100),
    ufcustomer character varying(2),
    bairrocustomer character varying(30),
    citycustomer character varying(60),
    passwordcustomer character varying(80)
);


ALTER TABLE public.customer OWNER TO sysadm;

--
-- Name: customer_idcustomer_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.customer_idcustomer_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_idcustomer_seq OWNER TO sysadm;

--
-- Name: customer_idcustomer_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.customer_idcustomer_seq OWNED BY public.customer.idcustomer;


--
-- Name: faselitigation; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.faselitigation (
    idfaselitigation integer NOT NULL,
    namefaselitigation character varying(100) NOT NULL,
    descriptionfaselitigation character varying(100) NOT NULL
);


ALTER TABLE public.faselitigation OWNER TO sysadm;

--
-- Name: faselitigation_idfaselitigation_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.faselitigation_idfaselitigation_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.faselitigation_idfaselitigation_seq OWNER TO sysadm;

--
-- Name: faselitigation_idfaselitigation_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.faselitigation_idfaselitigation_seq OWNED BY public.faselitigation.idfaselitigation;


--
-- Name: instancialitigation; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.instancialitigation (
    idinstancialitigation integer NOT NULL,
    nameinstancialitigation character varying(100) NOT NULL,
    descriptioninstancialitigation character varying(100) NOT NULL
);


ALTER TABLE public.instancialitigation OWNER TO sysadm;

--
-- Name: instancialitigation_idinstancialitigation_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.instancialitigation_idinstancialitigation_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.instancialitigation_idinstancialitigation_seq OWNER TO sysadm;

--
-- Name: instancialitigation_idinstancialitigation_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.instancialitigation_idinstancialitigation_seq OWNED BY public.instancialitigation.idinstancialitigation;


--
-- Name: litigation; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.litigation (
    idlitigation integer NOT NULL,
    numberlitigation integer NOT NULL,
    idcustomerfk integer NOT NULL,
    iduserfk integer NOT NULL,
    idadvocacyfk integer NOT NULL,
    idtypelitigationfk integer NOT NULL,
    idfaselitigationfk integer NOT NULL,
    idarealitigationfk integer NOT NULL,
    idstatuslitigationfk integer NOT NULL,
    idinstancialitigationfk integer NOT NULL,
    varalitigation character varying(100) NOT NULL,
    comarcalitigation character varying(100) NOT NULL,
    ritolitigation character varying(100) NOT NULL,
    valuelitigation real NOT NULL,
    datalitigation timestamp without time zone NOT NULL,
    attachmentlitigation character varying(1000) NOT NULL
);


ALTER TABLE public.litigation OWNER TO sysadm;

--
-- Name: litigation_idlitigation_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.litigation_idlitigation_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.litigation_idlitigation_seq OWNER TO sysadm;

--
-- Name: litigation_idlitigation_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.litigation_idlitigation_seq OWNED BY public.litigation.idlitigation;


--
-- Name: movement; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.movement (
    idmovement integer NOT NULL,
    idcashflowpk integer,
    idmovementtypespk integer,
    iduserpk integer,
    observation character varying(400),
    movementtimestamp timestamp without time zone NOT NULL,
    value real NOT NULL
);


ALTER TABLE public.movement OWNER TO sysadm;

--
-- Name: movement_idmovement_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.movement_idmovement_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movement_idmovement_seq OWNER TO sysadm;

--
-- Name: movement_idmovement_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.movement_idmovement_seq OWNED BY public.movement.idmovement;


--
-- Name: movementtypes; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.movementtypes (
    idmovementtypes integer NOT NULL,
    namemovementtype character varying(100) NOT NULL,
    typemovementtype boolean NOT NULL,
    statusmovementtype integer
);


ALTER TABLE public.movementtypes OWNER TO sysadm;

--
-- Name: movementtypes_idmovementtypes_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.movementtypes_idmovementtypes_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movementtypes_idmovementtypes_seq OWNER TO sysadm;

--
-- Name: movementtypes_idmovementtypes_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.movementtypes_idmovementtypes_seq OWNED BY public.movementtypes.idmovementtypes;


--
-- Name: role; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.role (
    idrole integer NOT NULL,
    namerole character varying(50) NOT NULL,
    descriptionrole character varying(200) NOT NULL
);


ALTER TABLE public.role OWNER TO sysadm;

--
-- Name: role_idrole_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.role_idrole_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_idrole_seq OWNER TO sysadm;

--
-- Name: role_idrole_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.role_idrole_seq OWNED BY public.role.idrole;


--
-- Name: rolerights; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.rolerights (
    idroleright integer NOT NULL,
    idwindowfk integer,
    idrolefk integer,
    actionrolerights text[]
);


ALTER TABLE public.rolerights OWNER TO sysadm;

--
-- Name: rolerights_idroleright_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.rolerights_idroleright_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rolerights_idroleright_seq OWNER TO sysadm;

--
-- Name: rolerights_idroleright_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.rolerights_idroleright_seq OWNED BY public.rolerights.idroleright;


--
-- Name: statuslitigation; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.statuslitigation (
    idstatuslitigation integer NOT NULL,
    namestatuslitigation character varying(100) NOT NULL,
    descriptionstatuslitigation character varying(100) NOT NULL
);


ALTER TABLE public.statuslitigation OWNER TO sysadm;

--
-- Name: statuslitigation_idstatuslitigation_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.statuslitigation_idstatuslitigation_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.statuslitigation_idstatuslitigation_seq OWNER TO sysadm;

--
-- Name: statuslitigation_idstatuslitigation_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.statuslitigation_idstatuslitigation_seq OWNED BY public.statuslitigation.idstatuslitigation;


--
-- Name: task; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.task (
    idtask integer NOT NULL,
    initialtimestamptask timestamp without time zone NOT NULL,
    finaltimestamptask timestamp without time zone NOT NULL,
    descriptiontask character varying(200) NOT NULL,
    idlitigationfk integer,
    idcustomerfk integer,
    iduserfk integer,
    idtasktypefk integer
);


ALTER TABLE public.task OWNER TO sysadm;

--
-- Name: task_idtask_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.task_idtask_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.task_idtask_seq OWNER TO sysadm;

--
-- Name: task_idtask_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.task_idtask_seq OWNED BY public.task.idtask;


--
-- Name: tasktype; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.tasktype (
    idtasktype integer NOT NULL,
    nametasktype character varying(100) NOT NULL,
    descriptiontasktype character varying(100) NOT NULL
);


ALTER TABLE public.tasktype OWNER TO sysadm;

--
-- Name: tasktype_idtasktype_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.tasktype_idtasktype_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tasktype_idtasktype_seq OWNER TO sysadm;

--
-- Name: tasktype_idtasktype_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.tasktype_idtasktype_seq OWNED BY public.tasktype.idtasktype;


--
-- Name: typelitigation; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.typelitigation (
    idtypelitigation integer NOT NULL,
    nametypelitigation character varying(100) NOT NULL,
    descriptiontypelitigation character varying(100) NOT NULL
);


ALTER TABLE public.typelitigation OWNER TO sysadm;

--
-- Name: typelitigation_idtypelitigation_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.typelitigation_idtypelitigation_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.typelitigation_idtypelitigation_seq OWNER TO sysadm;

--
-- Name: typelitigation_idtypelitigation_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.typelitigation_idtypelitigation_seq OWNED BY public.typelitigation.idtypelitigation;


--
-- Name: user; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public."user" (
    iduser integer NOT NULL,
    nameuser character varying(200) NOT NULL,
    cpfuser character varying(50) NOT NULL,
    rguser character varying(50) NOT NULL,
    emailuser character varying(150),
    phoneuser character varying(50),
    adressuser character varying(100),
    ufuser character varying(2),
    bairrouser character varying(30),
    cityuser character varying(60),
    passworduser character varying(80),
    oabuser character varying(80),
    lastadvocacyuserfk integer
);


ALTER TABLE public."user" OWNER TO sysadm;

--
-- Name: utilizer_iduser_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.utilizer_iduser_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.utilizer_iduser_seq OWNER TO sysadm;

--
-- Name: utilizer_iduser_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.utilizer_iduser_seq OWNED BY public."user".iduser;


--
-- Name: windows; Type: TABLE; Schema: public; Owner: sysadm
--

CREATE TABLE public.windows (
    idwindow integer NOT NULL,
    namewindow character varying(100) NOT NULL,
    actionwindow character varying(100)
);


ALTER TABLE public.windows OWNER TO sysadm;

--
-- Name: windows_idwindow_seq; Type: SEQUENCE; Schema: public; Owner: sysadm
--

CREATE SEQUENCE public.windows_idwindow_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.windows_idwindow_seq OWNER TO sysadm;

--
-- Name: windows_idwindow_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sysadm
--

ALTER SEQUENCE public.windows_idwindow_seq OWNED BY public.windows.idwindow;


--
-- Name: advocacy idadvocacy; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacy ALTER COLUMN idadvocacy SET DEFAULT nextval('public.advocacy_idadvocacy_seq'::regclass);


--
-- Name: arealitigation idarealitigation; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.arealitigation ALTER COLUMN idarealitigation SET DEFAULT nextval('public.arealitigation_idarealitigation_seq'::regclass);


--
-- Name: cashflow idcashflow; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashflow ALTER COLUMN idcashflow SET DEFAULT nextval('public.cashflow_idcashflow_seq'::regclass);


--
-- Name: cashier idcashier; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashier ALTER COLUMN idcashier SET DEFAULT nextval('public.cashier_idcashier_seq'::regclass);


--
-- Name: cashier idadvocacypk; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashier ALTER COLUMN idadvocacypk SET DEFAULT nextval('public.cashier_idadvocacypk_seq'::regclass);


--
-- Name: customer idcustomer; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.customer ALTER COLUMN idcustomer SET DEFAULT nextval('public.customer_idcustomer_seq'::regclass);


--
-- Name: faselitigation idfaselitigation; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.faselitigation ALTER COLUMN idfaselitigation SET DEFAULT nextval('public.faselitigation_idfaselitigation_seq'::regclass);


--
-- Name: instancialitigation idinstancialitigation; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.instancialitigation ALTER COLUMN idinstancialitigation SET DEFAULT nextval('public.instancialitigation_idinstancialitigation_seq'::regclass);


--
-- Name: litigation idlitigation; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation ALTER COLUMN idlitigation SET DEFAULT nextval('public.litigation_idlitigation_seq'::regclass);


--
-- Name: movement idmovement; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movement ALTER COLUMN idmovement SET DEFAULT nextval('public.movement_idmovement_seq'::regclass);


--
-- Name: movementtypes idmovementtypes; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movementtypes ALTER COLUMN idmovementtypes SET DEFAULT nextval('public.movementtypes_idmovementtypes_seq'::regclass);


--
-- Name: role idrole; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.role ALTER COLUMN idrole SET DEFAULT nextval('public.role_idrole_seq'::regclass);


--
-- Name: rolerights idroleright; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.rolerights ALTER COLUMN idroleright SET DEFAULT nextval('public.rolerights_idroleright_seq'::regclass);


--
-- Name: statuslitigation idstatuslitigation; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.statuslitigation ALTER COLUMN idstatuslitigation SET DEFAULT nextval('public.statuslitigation_idstatuslitigation_seq'::regclass);


--
-- Name: task idtask; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.task ALTER COLUMN idtask SET DEFAULT nextval('public.task_idtask_seq'::regclass);


--
-- Name: tasktype idtasktype; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.tasktype ALTER COLUMN idtasktype SET DEFAULT nextval('public.tasktype_idtasktype_seq'::regclass);


--
-- Name: typelitigation idtypelitigation; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.typelitigation ALTER COLUMN idtypelitigation SET DEFAULT nextval('public.typelitigation_idtypelitigation_seq'::regclass);


--
-- Name: user iduser; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public."user" ALTER COLUMN iduser SET DEFAULT nextval('public.utilizer_iduser_seq'::regclass);


--
-- Name: windows idwindow; Type: DEFAULT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.windows ALTER COLUMN idwindow SET DEFAULT nextval('public.windows_idwindow_seq'::regclass);


--
-- Data for Name: advocacy; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.advocacy (idadvocacy, nameadvocacy, addressadvocacy, cityadvocacy, bairroadvocacy, ufadvocacy, phoneadvocacy, cnpjadvocacy, statusadvocacy, latitudeadvocacy, longitudeadvocacy) FROM stdin;
2	name	email	name	email	na	email	name	\N	\N	\N
3	name	email	name	email	na	email	name	\N	\N	\N
4	name	email	name	email	na	email	name	\N	\N	\N
5	name	email	name	email	na	email	name	\N	\N	\N
8	Teste	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	99999999999999	\N	\N	\N
9	Teste	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	99999999999999	\N	\N	\N
10	Teste	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	99999999999999	\N	\N	\N
11	Teste	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	99999999999999	1	-26.2840083	-48.8704175
20	Advocacy Insertion	Albino Kolbach n51	Joinville	Costa e Silva	SC	99 9999 9999	0000	1	0	0
26	Teste ADV I	Rua Albino Kolbach	\N	Costa e Silva	SC	(49)999999999	99999999999999	1	-26.2840083	-48.8704175
25	Teste ADV I	\N	\N	\N	\N	\N	\N	1	-200	\N
1	Teste ADV I	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	(49)999999999	1	-26.656	-484.5454
27	Teste ADV II	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	99999999999999	1	-26.2840083	-48.8704175
28	Teste ADV III	Rua Albino Kolbach	Joinville	Costa e Silva	SC	(49)999999999	99999999999999	1	-26.2840083	-48.8704175
\.


--
-- Data for Name: advocacycustomer; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.advocacycustomer (idadvocacyfk, idcustomerfk) FROM stdin;
\.


--
-- Data for Name: advocacyuserroleright; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.advocacyuserroleright (idadvocacyfk, idrolerightsfk, idutilizerfk) FROM stdin;
\.


--
-- Data for Name: arealitigation; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.arealitigation (idarealitigation, namearealitigation, descriptionarealitigation) FROM stdin;
\.


--
-- Data for Name: cashflow; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.cashflow (idcashflow, idcashierpk, closedat, openedat, closedbypk, openedbypk, initialcash, finalcash, totalfinalcash, statuscashflow) FROM stdin;
\.


--
-- Data for Name: cashier; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.cashier (idcashier, idadvocacypk, namecachier, currentmoney, statuscashier) FROM stdin;
\.


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.customer (idcustomer, namecustomer, cpfcustomer, rgcustomer, emailcustomer, phonecustomer, adresscustomer, ufcustomer, bairrocustomer, citycustomer, passwordcustomer) FROM stdin;
\.


--
-- Data for Name: faselitigation; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.faselitigation (idfaselitigation, namefaselitigation, descriptionfaselitigation) FROM stdin;
\.


--
-- Data for Name: instancialitigation; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.instancialitigation (idinstancialitigation, nameinstancialitigation, descriptioninstancialitigation) FROM stdin;
\.


--
-- Data for Name: litigation; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.litigation (idlitigation, numberlitigation, idcustomerfk, iduserfk, idadvocacyfk, idtypelitigationfk, idfaselitigationfk, idarealitigationfk, idstatuslitigationfk, idinstancialitigationfk, varalitigation, comarcalitigation, ritolitigation, valuelitigation, datalitigation, attachmentlitigation) FROM stdin;
\.


--
-- Data for Name: movement; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.movement (idmovement, idcashflowpk, idmovementtypespk, iduserpk, observation, movementtimestamp, value) FROM stdin;
\.


--
-- Data for Name: movementtypes; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.movementtypes (idmovementtypes, namemovementtype, typemovementtype, statusmovementtype) FROM stdin;
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.role (idrole, namerole, descriptionrole) FROM stdin;
1	Administrador	Acesso a todas as informações
\.


--
-- Data for Name: rolerights; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.rolerights (idroleright, idwindowfk, idrolefk, actionrolerights) FROM stdin;
\.


--
-- Data for Name: statuslitigation; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.statuslitigation (idstatuslitigation, namestatuslitigation, descriptionstatuslitigation) FROM stdin;
\.


--
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.task (idtask, initialtimestamptask, finaltimestamptask, descriptiontask, idlitigationfk, idcustomerfk, iduserfk, idtasktypefk) FROM stdin;
\.


--
-- Data for Name: tasktype; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.tasktype (idtasktype, nametasktype, descriptiontasktype) FROM stdin;
\.


--
-- Data for Name: typelitigation; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.typelitigation (idtypelitigation, nametypelitigation, descriptiontypelitigation) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public."user" (iduser, nameuser, cpfuser, rguser, emailuser, phoneuser, adressuser, ufuser, bairrouser, cityuser, passworduser, oabuser, lastadvocacyuserfk) FROM stdin;
\.


--
-- Data for Name: windows; Type: TABLE DATA; Schema: public; Owner: sysadm
--

COPY public.windows (idwindow, namewindow, actionwindow) FROM stdin;
1	Cadastro Cliente	cadastrar,visualizar
\.


--
-- Name: advocacy_idadvocacy_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.advocacy_idadvocacy_seq', 28, true);


--
-- Name: arealitigation_idarealitigation_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.arealitigation_idarealitigation_seq', 1, false);


--
-- Name: cashflow_idcashflow_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.cashflow_idcashflow_seq', 1, false);


--
-- Name: cashier_idadvocacypk_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.cashier_idadvocacypk_seq', 1, false);


--
-- Name: cashier_idcashier_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.cashier_idcashier_seq', 1, false);


--
-- Name: customer_idcustomer_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.customer_idcustomer_seq', 1, false);


--
-- Name: faselitigation_idfaselitigation_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.faselitigation_idfaselitigation_seq', 1, false);


--
-- Name: instancialitigation_idinstancialitigation_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.instancialitigation_idinstancialitigation_seq', 1, false);


--
-- Name: litigation_idlitigation_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.litigation_idlitigation_seq', 1, false);


--
-- Name: movement_idmovement_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.movement_idmovement_seq', 1, false);


--
-- Name: movementtypes_idmovementtypes_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.movementtypes_idmovementtypes_seq', 1, false);


--
-- Name: role_idrole_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.role_idrole_seq', 1, true);


--
-- Name: rolerights_idroleright_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.rolerights_idroleright_seq', 1, false);


--
-- Name: statuslitigation_idstatuslitigation_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.statuslitigation_idstatuslitigation_seq', 1, false);


--
-- Name: task_idtask_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.task_idtask_seq', 1, false);


--
-- Name: tasktype_idtasktype_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.tasktype_idtasktype_seq', 1, false);


--
-- Name: typelitigation_idtypelitigation_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.typelitigation_idtypelitigation_seq', 1, false);


--
-- Name: utilizer_iduser_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.utilizer_iduser_seq', 1, false);


--
-- Name: windows_idwindow_seq; Type: SEQUENCE SET; Schema: public; Owner: sysadm
--

SELECT pg_catalog.setval('public.windows_idwindow_seq', 1, true);


--
-- Name: advocacy advocacy_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacy
    ADD CONSTRAINT advocacy_pkey PRIMARY KEY (idadvocacy);


--
-- Name: advocacycustomer advocacycustomer_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacycustomer
    ADD CONSTRAINT advocacycustomer_pkey PRIMARY KEY (idcustomerfk, idadvocacyfk);


--
-- Name: advocacyuserroleright advocacyutilizerroleright_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacyuserroleright
    ADD CONSTRAINT advocacyutilizerroleright_pkey PRIMARY KEY (idadvocacyfk, idrolerightsfk, idutilizerfk);


--
-- Name: arealitigation arealitigation_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.arealitigation
    ADD CONSTRAINT arealitigation_pkey PRIMARY KEY (idarealitigation);


--
-- Name: cashflow cashflow_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashflow
    ADD CONSTRAINT cashflow_pkey PRIMARY KEY (idcashflow);


--
-- Name: cashier cashier_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashier
    ADD CONSTRAINT cashier_pkey PRIMARY KEY (idcashier);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (idcustomer);


--
-- Name: faselitigation faselitigation_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.faselitigation
    ADD CONSTRAINT faselitigation_pkey PRIMARY KEY (idfaselitigation);


--
-- Name: instancialitigation instancialitigation_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.instancialitigation
    ADD CONSTRAINT instancialitigation_pkey PRIMARY KEY (idinstancialitigation);


--
-- Name: litigation litigation_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_pkey PRIMARY KEY (idlitigation);


--
-- Name: movement movement_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movement
    ADD CONSTRAINT movement_pkey PRIMARY KEY (idmovement);


--
-- Name: movementtypes movementtypes_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movementtypes
    ADD CONSTRAINT movementtypes_pkey PRIMARY KEY (idmovementtypes);


--
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (idrole);


--
-- Name: rolerights rolerights_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.rolerights
    ADD CONSTRAINT rolerights_pkey PRIMARY KEY (idroleright);


--
-- Name: statuslitigation statuslitigation_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.statuslitigation
    ADD CONSTRAINT statuslitigation_pkey PRIMARY KEY (idstatuslitigation);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_pkey PRIMARY KEY (idtask);


--
-- Name: tasktype tasktype_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.tasktype
    ADD CONSTRAINT tasktype_pkey PRIMARY KEY (idtasktype);


--
-- Name: typelitigation typelitigation_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.typelitigation
    ADD CONSTRAINT typelitigation_pkey PRIMARY KEY (idtypelitigation);


--
-- Name: user utilizer_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT utilizer_pkey PRIMARY KEY (iduser);


--
-- Name: windows windows_pkey; Type: CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.windows
    ADD CONSTRAINT windows_pkey PRIMARY KEY (idwindow);


--
-- Name: advocacycustomer advocacycustomer_idadvocacyfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacycustomer
    ADD CONSTRAINT advocacycustomer_idadvocacyfk_fkey FOREIGN KEY (idadvocacyfk) REFERENCES public.advocacy(idadvocacy);


--
-- Name: advocacycustomer advocacycustomer_idcustomerfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacycustomer
    ADD CONSTRAINT advocacycustomer_idcustomerfk_fkey FOREIGN KEY (idcustomerfk) REFERENCES public.customer(idcustomer);


--
-- Name: advocacyuserroleright advocacyutilizerroleright_idadvocacyfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacyuserroleright
    ADD CONSTRAINT advocacyutilizerroleright_idadvocacyfk_fkey FOREIGN KEY (idadvocacyfk) REFERENCES public.advocacy(idadvocacy);


--
-- Name: advocacyuserroleright advocacyutilizerroleright_idrolerightsfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacyuserroleright
    ADD CONSTRAINT advocacyutilizerroleright_idrolerightsfk_fkey FOREIGN KEY (idrolerightsfk) REFERENCES public.rolerights(idroleright);


--
-- Name: advocacyuserroleright advocacyutilizerroleright_idutilizerfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.advocacyuserroleright
    ADD CONSTRAINT advocacyutilizerroleright_idutilizerfk_fkey FOREIGN KEY (idutilizerfk) REFERENCES public."user"(iduser);


--
-- Name: cashflow cashflow_closedbypk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashflow
    ADD CONSTRAINT cashflow_closedbypk_fkey FOREIGN KEY (closedbypk) REFERENCES public."user"(iduser);


--
-- Name: cashflow cashflow_idcashierpk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashflow
    ADD CONSTRAINT cashflow_idcashierpk_fkey FOREIGN KEY (idcashierpk) REFERENCES public.cashier(idcashier);


--
-- Name: cashflow cashflow_openedbypk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashflow
    ADD CONSTRAINT cashflow_openedbypk_fkey FOREIGN KEY (openedbypk) REFERENCES public."user"(iduser);


--
-- Name: cashier cashier_idadvocacypk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.cashier
    ADD CONSTRAINT cashier_idadvocacypk_fkey FOREIGN KEY (idadvocacypk) REFERENCES public.advocacy(idadvocacy);


--
-- Name: litigation litigation_idadvocacyfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idadvocacyfk_fkey FOREIGN KEY (idadvocacyfk) REFERENCES public.advocacy(idadvocacy);


--
-- Name: litigation litigation_idarealitigationfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idarealitigationfk_fkey FOREIGN KEY (idarealitigationfk) REFERENCES public.arealitigation(idarealitigation);


--
-- Name: litigation litigation_idcustomerfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idcustomerfk_fkey FOREIGN KEY (idcustomerfk) REFERENCES public.customer(idcustomer);


--
-- Name: litigation litigation_idfaselitigationfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idfaselitigationfk_fkey FOREIGN KEY (idfaselitigationfk) REFERENCES public.faselitigation(idfaselitigation);


--
-- Name: litigation litigation_idinstancialitigationfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idinstancialitigationfk_fkey FOREIGN KEY (idinstancialitigationfk) REFERENCES public.instancialitigation(idinstancialitigation);


--
-- Name: litigation litigation_idstatuslitigationfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idstatuslitigationfk_fkey FOREIGN KEY (idstatuslitigationfk) REFERENCES public.statuslitigation(idstatuslitigation);


--
-- Name: litigation litigation_idtypelitigationfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_idtypelitigationfk_fkey FOREIGN KEY (idtypelitigationfk) REFERENCES public.typelitigation(idtypelitigation);


--
-- Name: litigation litigation_iduserfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.litigation
    ADD CONSTRAINT litigation_iduserfk_fkey FOREIGN KEY (iduserfk) REFERENCES public."user"(iduser);


--
-- Name: movement movement_idcashflowpk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movement
    ADD CONSTRAINT movement_idcashflowpk_fkey FOREIGN KEY (idcashflowpk) REFERENCES public.cashflow(idcashflow);


--
-- Name: movement movement_idmovementtypespk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movement
    ADD CONSTRAINT movement_idmovementtypespk_fkey FOREIGN KEY (idmovementtypespk) REFERENCES public.movementtypes(idmovementtypes);


--
-- Name: movement movement_iduserpk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.movement
    ADD CONSTRAINT movement_iduserpk_fkey FOREIGN KEY (iduserpk) REFERENCES public."user"(iduser);


--
-- Name: rolerights rolerights_idrolefk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.rolerights
    ADD CONSTRAINT rolerights_idrolefk_fkey FOREIGN KEY (idrolefk) REFERENCES public.role(idrole);


--
-- Name: rolerights rolerights_idwindowfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.rolerights
    ADD CONSTRAINT rolerights_idwindowfk_fkey FOREIGN KEY (idwindowfk) REFERENCES public.windows(idwindow);


--
-- Name: task task_idcustomerfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_idcustomerfk_fkey FOREIGN KEY (idcustomerfk) REFERENCES public.customer(idcustomer);


--
-- Name: task task_idlitigationfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_idlitigationfk_fkey FOREIGN KEY (idlitigationfk) REFERENCES public.litigation(idlitigation);


--
-- Name: task task_idtasktypefk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_idtasktypefk_fkey FOREIGN KEY (idtasktypefk) REFERENCES public.tasktype(idtasktype);


--
-- Name: task task_iduserfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT task_iduserfk_fkey FOREIGN KEY (iduserfk) REFERENCES public."user"(iduser);


--
-- Name: user utilizer_lastadvocacyuserfk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sysadm
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT utilizer_lastadvocacyuserfk_fkey FOREIGN KEY (lastadvocacyuserfk) REFERENCES public.advocacy(idadvocacy);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO sysadm;


--
-- PostgreSQL database dump complete
--

