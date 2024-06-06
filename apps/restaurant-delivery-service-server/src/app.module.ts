import { Module } from "@nestjs/common";
import { DriverModule } from "./driver/driver.module";
import { MenuModule } from "./menu/menu.module";
import { AccountModule } from "./account/account.module";
import { AdminModule } from "./admin/admin.module";
import { PaymentModule } from "./payment/payment.module";
import { FoodModule } from "./food/food.module";
import { OrderModule } from "./order/order.module";
import { CartModule } from "./cart/cart.module";
import { ReviewModule } from "./review/review.module";
import { LiveUpdatesModule } from "./liveUpdates/liveUpdates.module";
import { UserAddressModule } from "./userAddress/userAddress.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DriverModule,
    MenuModule,
    AccountModule,
    AdminModule,
    PaymentModule,
    FoodModule,
    OrderModule,
    CartModule,
    ReviewModule,
    LiveUpdatesModule,
    UserAddressModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
