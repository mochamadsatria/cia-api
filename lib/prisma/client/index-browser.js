
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AnnouncementScalarFieldEnum = makeEnum({
  id: 'id',
  event: 'event',
  message: 'message',
  published_at: 'published_at'
});

exports.Prisma.CICMemberScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  whatsapp: 'whatsapp',
  line_id: 'line_id',
  student_card: 'student_card',
  student_proof: 'student_proof',
  study_major: 'study_major',
  generation: 'generation',
  twibbon_proof: 'twibbon_proof',
  is_leader: 'is_leader',
  team_id: 'team_id'
});

exports.Prisma.CICTeamScalarFieldEnum = makeEnum({
  id: 'id',
  team_name: 'team_name',
  university: 'university',
  payment_proof_id: 'payment_proof_id',
  truth_statement: 'truth_statement',
  stc_statement: 'stc_statement',
  finalized_at: 'finalized_at'
});

exports.Prisma.FCECMemberScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  whatsapp: 'whatsapp',
  line_id: 'line_id',
  student_card: 'student_card',
  student_proof: 'student_proof',
  twibbon_proof: 'twibbon_proof',
  photo: 'photo',
  is_leader: 'is_leader',
  team_id: 'team_id'
});

exports.Prisma.FCECTeamScalarFieldEnum = makeEnum({
  id: 'id',
  school: 'school',
  abstract_title: 'abstract_title',
  team_name: 'team_name',
  originality_letter: 'originality_letter',
  abstract: 'abstract',
  truth_statement: 'truth_statement',
  stc_statement: 'stc_statement',
  finalized_at: 'finalized_at'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  id: 'id',
  proof: 'proof'
});

exports.Prisma.SBCLecturerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  profession_id: 'profession_id',
  email: 'email',
  whatsapp: 'whatsapp',
  photo: 'photo'
});

exports.Prisma.SBCMemberScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  student_id: 'student_id',
  study_major: 'study_major',
  semester: 'semester',
  email: 'email',
  whatsapp: 'whatsapp',
  line_id: 'line_id',
  twibbon_proof: 'twibbon_proof',
  student_card: 'student_card',
  student_proof: 'student_proof',
  photo: 'photo',
  is_leader: 'is_leader',
  team_id: 'team_id'
});

exports.Prisma.SBCTeamScalarFieldEnum = makeEnum({
  id: 'id',
  university: 'university',
  team_name: 'team_name',
  bridge_name: 'bridge_name',
  voucher_proof: 'voucher_proof',
  lecturer_id: 'lecturer_id',
  payment_proof_id: 'payment_proof_id',
  truth_statement: 'truth_statement',
  stc_statement: 'stc_statement',
  finalized_at: 'finalized_at'
});

exports.Prisma.ServiceScalarFieldEnum = makeEnum({
  id: 'id',
  service: 'service',
  active: 'active'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  SBCTeam: 'SBCTeam',
  SBCMember: 'SBCMember',
  SBCLecturer: 'SBCLecturer',
  Payment: 'Payment',
  FCECMember: 'FCECMember',
  FCECTeam: 'FCECTeam',
  CICMember: 'CICMember',
  CICTeam: 'CICTeam',
  Announcement: 'Announcement',
  Service: 'Service'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
