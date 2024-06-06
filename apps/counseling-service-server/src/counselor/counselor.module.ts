import { Module } from "@nestjs/common";
import { CounselorModuleBase } from "./base/counselor.module.base";
import { CounselorService } from "./counselor.service";
import { CounselorController } from "./counselor.controller";
import { CounselorResolver } from "./counselor.resolver";

@Module({
  imports: [CounselorModuleBase],
  controllers: [CounselorController],
  providers: [CounselorService, CounselorResolver],
  exports: [CounselorService],
})
export class CounselorModule {}
