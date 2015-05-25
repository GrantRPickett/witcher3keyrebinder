var download = "";
var b = "[BASE_ALL_ATTACKS]\n"+
"IK_None=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+
"IK_{padHeavy}=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=AttackHeavy)\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_{padLight}=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_{padLight}=(Action=AttackLight)\n"+
"\n"+
"[BASE_ATTACKS_NO_LIGHT]\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_None=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+
"IK_{padHeavy}=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=AttackHeavy)\n"+
"\n"+
"[BASE_ATTACK_HEAVY]\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+
"IK_{padHeavy}=(Action=AttackHeavy)\n"+
"\n"+
"[BASE_ATTACK_LIGHT]\n"+
"IK_{padLight}=(Action=AttackLight)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"\n"+
"[BASE_CameraMovement]\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"\n"+
"[BASE_CharacterMovement]\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"\n"+
"[BASE_CharacterMovementWithSprint]\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"\n"+
"[BASE_DEBUG]\n"+
"\n"+
"[BASE_DRAW_SWORDS]\n"+
"IK_{pad1}=(Action=SteelSword)\n"+
"IK_{pad1}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{pad2}=(Action=SilverSword)\n"+
"IK_{pad2}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"\n"+
"[BASE_DRAW_SWORDS_KEYBOARD]\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"\n"+
"[BASE_DRINK_POTIONS]\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"\n"+
"[BASE_FocusMode]\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"\n"+
"[BASE_INTERACTIONS_HORSE]\n"+
"IK_{padFollow}=(Action=Follow)\n"+
"IK_{Follow}=(Action=Follow)\n"+
"\n"+
"[BASE_INTERACTIONS_KEYBOARD]\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"\n"+
"[BASE_INTERACTIONS_PAD]\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"\n"+
"[BASE_Interactions]\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"\n"+
"[BASE_Items]\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"\n"+
"[BASE_JOURNAL_AND_QUEST_MANAGE]\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padQuest}=(Action=HighlightObjective)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"\n"+
"[BASE_PanelsShortcuts]\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"\n"+
"[BASE_SHOW_RADIAL_MENU]\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"\n"+
"[BASE_SPECIAL_ATTACK_HEAVY]\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"\n"+
"[BASE_SPECIAL_ATTACK_LIGHT]\n"+
"IK_{padLight}=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"\n"+
"[BASE_Signs]\n"+
"IK_{padSign}=(Action=CastSignHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padSign}=(Action=CastSign)\n"+
"IK_{3}=(Action=SelectAard)\n"+
"IK_{4}=(Action=SelectYrden)\n"+
"IK_{5}=(Action=SelectIgni)\n"+
"IK_{6}=(Action=SelectQuen)\n"+
"IK_{Sign}=(Action=CastSign)\n"+
"IK_{Sign}=(Action=CastSignHold,State=Duration,IdleTime=0.2)\n"+
"IK_{7}=(Action=SelectAxii)\n"+
"\n"+
"[Boat]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{MiddleMouse}=(Action=VehicleItemActionHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=VehicleItemAction)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padMiddleMouse}=(Action=VehicleItemActionHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=VehicleItemAction)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"IK_{Focus}=(Action=GI_Accelerate)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{padLight}=(Action=GI_Decelerate)\n"+
"IK_{padJump}=(Action=VehicleItemActionAbort)\n"+
"IK_{padJump}=(Action=BoatDismount)\n"+
"IK_{Jump}=(Action=VehicleItemActionAbort)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{E}=(Action=BoatDismount)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{padE}=(Action=GI_Accelerate)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_NumPad1=(Action=Debug_KillAllEnemies)\n"+
"IK_NumPad2=(Action=Debug_KillTarget)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Down2}=(Action=GI_Decelerate)\n"+
"IK_NumPad5=(Action=Debug_Resurrect)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+

"IK_{CameraLock}=(Action=CameraLock)\n"+
"\n"+
"[BoatPassenger]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{padJump}=(Action=BoatDismount)\n"+

"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{E}=(Action=BoatDismount)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+

"\n"+
"[Combat]\n"+
"IK_{Dodge}=(Action=Dodge)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{padE}=(Action=CbtRoll)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_None=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{3}=(Action=SelectAard)\n"+
"IK_{4}=(Action=SelectYrden)\n"+
"IK_{5}=(Action=SelectIgni)\n"+
"IK_{6}=(Action=SelectQuen)\n"+
"IK_{padHorse}=(Action=SpawnHorse)\n"+
"IK_{7}=(Action=SelectAxii)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{padSign}=(Action=CastSignHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padSign}=(Action=CastSign)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Up}=(Action=MovementDoubleTapW)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Left2}=(Action=MovementDoubleTapA)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Right2}=(Action=MovementDoubleTapD)\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+

"IK_{padDodge}=(Action=Dodge)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Sign}=(Action=CastSign)\n"+
"IK_{Sign}=(Action=CastSignHold,State=Duration,IdleTime=0.2)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Left}=(Action=MovementDoubleTapA)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Down2}=(Action=MovementDoubleTapS)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_{padHeavy}=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=AttackHeavy)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{pad2}=(Action=SilverSword)\n"+
"IK_{pad2}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{pad2}=(Action=ComboDigitRight)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Up2}=(Action=MovementDoubleTapW)\n"+
"IK_{Horse}=(Action=SpawnHorse)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+

"IK_{CameraLock}=(Action=CameraLock)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_{RightMouse}=(Action=LockAndGuard)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{padFocus}=(Action=LockAndGuard)\n"+
"IK_{padFocus}=(Action=Alternate)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Right}=(Action=MovementDoubleTapD)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{padLight}=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_{padLight}=(Action=AttackLight)\n"+
"IK_{Jump}=(Action=CbtRoll)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_MouseZ=(Action=ToggleSigns)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Down}=(Action=MovementDoubleTapS)\n"+
"IK_{pad1}=(Action=SteelSword)\n"+
"IK_{pad1}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{pad1}=(Action=ComboDigitLeft)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"\n"+
"[Combat_Replacer_Ciri]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padSign}=(Action=CiriSpecialAttack)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{padLight}=(Action=AttackLight)\n"+
"IK_{pad2}=(Action=CiriDrawWeapon)\n"+
"IK_{padDodge}=(Action=CiriDodge)\n"+

"IK_{Jump}=(Action=CiriDodge)\n"+
"IK_{Jump}=(Action=CiriDash)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padFocus}=(Action=LockAndGuard)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{RightMouse}=(Action=LockAndGuard)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{pad1}=(Action=CiriDrawWeapon)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{padHeavy}=(Action=CiriSpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=CiriAttackHeavy)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{padE}=(Action=CiriDash)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{Sign}=(Action=CiriSpecialAttack)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+

"IK_{CameraLock}=(Action=CameraLock)\n"+
"\n"+
"[Death]\n"+
"\n"+
"[Diving]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{padLight}=(Action=DiveDown)\n"+
"IK_{padJump}=(Action=ExplorationInteraction)\n"+
"IK_{padSurface}=(Action=DiveUp)\n"+

"IK_{Jump}=(Action=ExplorationInteraction)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{DiveDown}=(Action=DiveDown)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_MouseZ=(Action=ToggleSigns)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Surface}=(Action=DiveUp)\n"+

"IK_{CameraLock}=(Action=CameraLock)\n"+
"\n"+
"[EMPTY_CONTEXT]\n"+
"\n"+
"[Exploration]\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_None=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{WalkToggle}=(Action=WalkToggle)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{3}=(Action=SelectAard)\n"+
"IK_{4}=(Action=SelectYrden)\n"+
"IK_{5}=(Action=SelectIgni)\n"+
"IK_{6}=(Action=SelectQuen)\n"+
"IK_{padHorse}=(Action=SpawnHorse)\n"+
"IK_{7}=(Action=SelectAxii)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{padSign}=(Action=CastSignHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padSign}=(Action=CastSign)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{padRoll}=(Action=Roll)\n"+
"IK_{padJump}=(Action=ExplorationInteraction)\n"+
"IK_{padJump}=(Action=Jump)\n"+

"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Sign}=(Action=CastSign)\n"+
"IK_{Sign}=(Action=CastSignHold,State=Duration,IdleTime=0.2)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_{padHeavy}=(Action=SpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=AttackHeavy)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{pad2}=(Action=SilverSword)\n"+
"IK_{pad2}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Horse}=(Action=SpawnHorse)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+

"IK_{CameraLock}=(Action=CameraLock)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padLight}=(Action=SpecialAttackLight,State=Duration,IdleTime=0.2)\n"+
"IK_{padLight}=(Action=AttackLight)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{Jump}=(Action=ExplorationInteraction)\n"+
"IK_{Jump}=(Action=Jump)\n"+
"IK_{Roll}=(Action=Roll)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_MouseZ=(Action=ToggleSigns)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{pad1}=(Action=SteelSword)\n"+
"IK_{pad1}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"\n"+
"[Exploration_Replacer_Ciri]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padSign}=(Action=CiriSpecialAttack)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{1}=(Action=CiriDrawWeapon)\n"+
"IK_{2}=(Action=CiriDrawWeapon)\n"+
"IK_{padLight}=(Action=AttackLight)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{pad2}=(Action=CiriDrawWeapon)\n"+
"IK_{pad2}=(Action=CiriHolsterWeapon,State=Duration,IdleTime=0.3)\n"+
"IK_{padRoll}=(Action=Roll)\n"+
"IK_{padJump}=(Action=ExplorationInteraction)\n"+
"IK_{padJump}=(Action=Jump)\n"+

"IK_{Jump}=(Action=ExplorationInteraction)\n"+
"IK_{Jump}=(Action=Jump)\n"+
"IK_{Roll}=(Action=Roll)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{pad1}=(Action=CiriDrawWeapon)\n"+
"IK_{pad1}=(Action=CiriHolsterWeapon,State=Duration,IdleTime=0.3)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{padHeavy}=(Action=CiriSpecialAttackHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{padHeavy}=(Action=CiriAttackHeavy)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{LeftMouse}=(Action=SpecialAttackWithAlternateLight,State=Duration,IdleTime=0.2)\n"+
"IK_{LeftMouse}=(Action=AttackWithAlternateLight)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{Sign}=(Action=CiriSpecialAttack)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_None=(Action=AttackWithAlternateHeavy)\n"+
"IK_None=(Action=SpecialAttackWithAlternateHeavy,State=Duration,IdleTime=0.2)\n"+
"IK_{WalkToggle}=(Action=WalkToggle)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{PCALT}=(Action=PCAlternate)\n"+

"\n"+
"[FakeAxisInput]\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"\n"+
"[FastMenu]\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"\n"+
"[Horse]\n"+
"IK_{padCantorGallop}=(Action=Canter)\n"+
"IK_{padCantorGallop}=(Action=Gallop,State=Duration,IdleTime=0.3)\n"+
"IK_{padFollow}=(Action=Follow)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{padSign}=(Action=VehicleCastSign)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=HorseDismount)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"IK_{Follow}=(Action=Follow)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{padJump}=(Action=HorseJump)\n"+
"IK_{padJump}=(Action=HorseDismount,State=Duration,IdleTime=10000)\n"+
"IK_{padJump}=(Action=VehicleItemActionAbort)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Sign}=(Action=VehicleCastSign)\n"+
"IK_{CantorGallop}=(Action=Canter)\n"+
"IK_{CantorGallop}=(Action=Gallop,State=Duration,IdleTime=0.3)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_{padHeavy}=(Action=VehicleAttack)\n"+
"IK_{pad2}=(Action=SilverSword)\n"+
"IK_{pad2}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Horse}=(Action=Stop)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{CameraLock}=(Action=CameraLock)\n"+
"IK_{LeftMouse}=(Action=VehicleAttack)\n"+
"IK_{padMiddleMouse}=(Action=VehicleItemActionHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=VehicleItemAction)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padLight}=(Action=VehicleAttack)\n"+
"IK_{Jump}=(Action=HorseJump)\n"+
"IK_{Jump}=(Action=VehicleItemActionAbort)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{pad1}=(Action=SteelSword)\n"+
"IK_{pad1}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{MiddleMouse}=(Action=VehicleItemActionHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=VehicleItemAction)\n"+
"\n"+
"[Horse_Replacer_Ciri]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{Follow}=(Action=Follow)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{1}=(Action=CiriDrawWeapon)\n"+
"IK_{2}=(Action=CiriDrawWeapon)\n"+
"IK_{padLight}=(Action=VehicleAttack)\n"+
"IK_{pad2}=(Action=CiriDrawWeapon)\n"+
"IK_{pad2}=(Action=CiriHolsterWeapon,State=Duration,IdleTime=0.3)\n"+
"IK_{padJump}=(Action=HorseJump)\n"+

"IK_{Jump}=(Action=HorseJump)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=HorseDismount)\n"+
"IK_{pad1}=(Action=CiriDrawWeapon)\n"+
"IK_{pad1}=(Action=CiriHolsterWeapon,State=Duration,IdleTime=0.3)\n"+
"IK_{padHeavy}=(Action=VehicleAttack)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{padCantorGallop}=(Action=Canter)\n"+
"IK_{padCantorGallop}=(Action=Gallop,State=Duration,IdleTime=0.3)\n"+
"IK_{padFollow}=(Action=Follow)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{LeftMouse}=(Action=VehicleAttack)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{CantorGallop}=(Action=Canter)\n"+
"IK_{CantorGallop}=(Action=Gallop,State=Duration,IdleTime=0.3)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Horse}=(Action=Stop)\n"+
"IK_{CameraLock}=(Action=CameraLock)\n"+
"\n"+
"[InputSettings]\n"+
"Version=21\n"+
"\n"+
"[JumpClimb]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"IK_{padLight}=(Action=DiveDown)\n"+
"IK_{pad2}=(Action=SilverSword)\n"+
"IK_{pad2}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padRoll}=(Action=Roll)\n"+
"IK_{padJump}=(Action=ExplorationInteraction)\n"+
"IK_{padJump}=(Action=Jump)\n"+
"IK_{Jump}=(Action=ExplorationInteraction)\n"+
"IK_{Jump}=(Action=Jump)\n"+
"IK_{Roll}=(Action=Roll)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"IK_{DiveDown}=(Action=DiveDown)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{pad1}=(Action=SteelSword)\n"+
"IK_{pad1}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_MouseZ=(Action=ToggleSigns)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"\n"+
"[LootPopup]\n"+
"\n"+
"[Meditation]\n"+
"IK_{Jump}=(Action=MeditationAbort)\n"+
"IK_{padJump}=(Action=MeditationAbort)\n"+
"\n"+
"[RadialMenu]\n"+
"IK_{padFocus}=(Action=LockAndGuard)\n"+
"IK_{padFocus}=(Action=Alternate)\n"+
"IK_{Jump}=(Action=OpenMeditation)\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{padLight}=(Action=OpenMeditation)\n"+
"IK_{RightMouse}=(Action=LockAndGuard)\n"+
"IK_{MiddleMouse}=(Action=OpenMeditation)\n"+
"IK_{padJump}=(Action=CloseRadialMenu)\n"+
"IK_{padE}=(Action=ConfirmRadialMenuSelection)\n"+
"\n"+
"[SCENE_IS_STARTING_HACK]\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"\n"+
"[Scene]\n"+
"IK_{Down2}=(Action=ChangeChoiceDown)\n"+
"IK_{Up2}=(Action=ChangeChoiceUp)\n"+
"IK_None=(Action=SCN_DBG_RestartScene,State=Duration,IdleTime=0.3)\n"+
"IK_None=(Action=SCN_DBG_RestartSection)\n"+
"IK_{padY}=(Action=ChangeChoiceAxis)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padPotion2}=(Action=ChangeChoiceUp)\n"+
"IK_{padPotion1}=(Action=ChangeChoiceDown)\n"+
"\n"+
"[ScriptedAction]\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{padCantorGallop}=(Action=Gallop,State=Duration,IdleTime=0.3)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{CantorGallop}=(Action=Gallop,State=Duration,IdleTime=0.2)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"\n"+
"[Swimming]\n"+
"IK_{RadMenu}=(Action=RadialMenu)\n"+
"IK_{padRadMenu}=(Action=RadialMenu)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"IK_{padQuest}=(Action=ShowEntryInPanel)\n"+
"IK_{padFastMenu}=(Action=FastMenu)\n"+
"IK_{padMap}=(Action=PanelMap,State=Duration,IdleTime=0.5)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{Focus}=(Action=Focus,Reprocess)\n"+
"IK_{padSign}=(Action=Spare)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_PS4_TOUCH_PRESS=(Action=HoldFastMenu,State=Duration,IdleTime=0.3)\n"+
"IK_PS4_TOUCH_PRESS=(Action=FastMenu)\n"+
"IK_{padLight}=(Action=Finisher)\n"+
"IK_{padLight}=(Action=Finish)\n"+
"IK_{padLight}=(Action=DiveDown)\n"+
"IK_{padJump}=(Action=ExplorationInteraction)\n"+
"IK_{padSurface}=(Action=DiveUp)\n"+
"IK_{Jump}=(Action=ExplorationInteraction)\n"+
"IK_{padPotion2}=(Action=DrinkPotion2)\n"+
"IK_{F1}=(Action=OnShowControlsHelp)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{padPotion1}=(Action=DrinkPotion1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{FastMenu}=(Action=HoldFastMenu,State=Duration,IdleTime=0.2)\n"+
"IK_{FastMenu}=(Action=FastMenu)\n"+
"IK_{padFocus}=(Action=Focus,Reprocess)\n"+
"IK_{Bestiary}=(Action=PanelBestiary)\n"+
"IK_{DiveDown}=(Action=DiveDown)\n"+
"IK_{padQuest}=(Action=TrackQuest)\n"+
"IK_{padCameraLock}=(Action=HighlightObjective)\n"+
"IK_{padCameraLock}=(Action=CameraLock)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{E}=(Action=BurnBody)\n"+
"IK_{E}=(Action=WineSlot)\n"+
"IK_{E}=(Action=PlaceBottle)\n"+
"IK_{E}=(Action=SitAndWait)\n"+
"IK_{E}=(Action=HideBible)\n"+
"IK_{E}=(Action=CallJohnny)\n"+
"IK_{Candle}=(Action=Extinguish)\n"+
"IK_{E}=(Action=Interaction)\n"+
"IK_{E}=(Action=PullAxe)\n"+
"IK_{E}=(Action=Read)\n"+
"IK_{E}=(Action=UseItem)\n"+
"IK_{E}=(Action=UnblockGate)\n"+
"IK_{Candle}=(Action=Ignite)\n"+
"IK_{E}=(Action=Free)\n"+
"IK_{E}=(Action=Grab)\n"+
"IK_{E}=(Action=PlaceOffering)\n"+
"IK_{E}=(Action=Drink)\n"+
"IK_{E}=(Action=PlaceHerbs)\n"+
"IK_{E}=(Action=GatherBrushwood)\n"+
"IK_{E}=(Action=Disarm)\n"+
"IK_{E}=(Action=Arm)\n"+
"IK_{E}=(Action=PrayForStorm)\n"+
"IK_{E}=(Action=PrayForSun)\n"+
"IK_{E}=(Action=Destroy)\n"+
"IK_{E}=(Action=Locked)\n"+
"IK_{E}=(Action=Pull)\n"+
"IK_{E}=(Action=Push)\n"+
"IK_{E}=(Action=Take)\n"+
"IK_{E}=(Action=Unlock)\n"+
"IK_{E}=(Action=Lock)\n"+
"IK_{E}=(Action=Close)\n"+
"IK_{E}=(Action=Open)\n"+
"IK_{E}=(Action=UseDevice)\n"+
"IK_{E}=(Action=Use)\n"+
"IK_{E}=(Action=InteractHold,State=Duration,IdleTime=0.1)\n"+
"IK_{E}=(Action=Interact)\n"+
"IK_{E}=(Action=Container)\n"+
"IK_{E}=(Action=Talk)\n"+
"IK_{E}=(Action=MountHorse)\n"+
"IK_{E}=(Action=EnterBoatFromSwimming)\n"+
"IK_{E}=(Action=EnterBoat)\n"+
"IK_{E}=(Action=Examine)\n"+
"IK_{GatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{FastTravel}=(Action=FastTravel)\n"+
"IK_{E}=(Action=Unequip)\n"+
"IK_{E}=(Action=Spare)\n"+
"IK_{E}=(Action=Knock)\n"+
"IK_{E}=(Action=SitDown)\n"+
"IK_{E}=(Action=PlaceCrystal)\n"+
"IK_{E}=(Action=PlaceOilLamp)\n"+
"IK_{E}=(Action=PickOilLamp)\n"+
"IK_{Potion2}=(Action=DrinkPotion2)\n"+
"IK_{padEscape}=(Action=IngameMenu)\n"+
"IK_{padEscape}=(Action=GotoGlossary,State=Duration,IdleTime=1.2)\n"+
"IK_{Glossary}=(Action=GotoGlossary)\n"+
"IK_{Glossary}=(Action=PanelGlossary)\n"+
"IK_{Gwint}=(Action=PanelGwintDeckEditor)\n"+
"IK_PS4_OPTIONS=(Action=ShowEntryInPanel)\n"+
"IK_PS4_OPTIONS=(Action=IngameMenu)\n"+
"IK_{Inv}=(Action=PanelInv)\n"+
"IK_{padE}=(Action=BurnBody)\n"+
"IK_{padE}=(Action=WineSlot)\n"+
"IK_{padE}=(Action=PlaceBottle)\n"+
"IK_{padE}=(Action=SitAndWait)\n"+
"IK_{padE}=(Action=HideBible)\n"+
"IK_{padE}=(Action=CallJohnny)\n"+
"IK_{padCandle}=(Action=Extinguish)\n"+
"IK_{padE}=(Action=Interaction)\n"+
"IK_{padE}=(Action=PullAxe)\n"+
"IK_{padE}=(Action=Read)\n"+
"IK_{padE}=(Action=UseItem)\n"+
"IK_{padE}=(Action=UnblockGate)\n"+
"IK_{padCandle}=(Action=Ignite)\n"+
"IK_{padE}=(Action=Free)\n"+
"IK_{padE}=(Action=Grab)\n"+
"IK_{padE}=(Action=PlaceOffering)\n"+
"IK_{padE}=(Action=Drink)\n"+
"IK_{padE}=(Action=PlaceHerbs)\n"+
"IK_{padE}=(Action=GatherBrushwood)\n"+
"IK_{padE}=(Action=Disarm)\n"+
"IK_{padE}=(Action=Arm)\n"+
"IK_{padE}=(Action=PrayForStorm)\n"+
"IK_{padE}=(Action=PrayForSun)\n"+
"IK_{padE}=(Action=Destroy)\n"+
"IK_{padE}=(Action=Locked)\n"+
"IK_{padE}=(Action=Pull)\n"+
"IK_{padE}=(Action=Push)\n"+
"IK_{padE}=(Action=Take)\n"+
"IK_{padE}=(Action=Unlock)\n"+
"IK_{padE}=(Action=Lock)\n"+
"IK_{padE}=(Action=Close)\n"+
"IK_{padE}=(Action=Open)\n"+
"IK_{padE}=(Action=UseDevice)\n"+
"IK_{padE}=(Action=Use)\n"+
"IK_{padE}=(Action=InteractHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padE}=(Action=Interact)\n"+
"IK_{padE}=(Action=Container)\n"+
"IK_{padE}=(Action=Talk)\n"+
"IK_{padE}=(Action=MountHorse)\n"+
"IK_{padE}=(Action=EnterBoatFromSwimming)\n"+
"IK_{padE}=(Action=EnterBoat)\n"+
"IK_{padE}=(Action=Examine)\n"+
"IK_{padGatherHerbs}=(Action=GatherHerbs)\n"+
"IK_{padFastTravel}=(Action=FastTravel)\n"+
"IK_{padE}=(Action=Unequip)\n"+
"IK_{padE}=(Action=Knock)\n"+
"IK_{padE}=(Action=SitDown)\n"+
"IK_{padE}=(Action=PlaceCrystal)\n"+
"IK_{padE}=(Action=PlaceOilLamp)\n"+
"IK_{padE}=(Action=PickOilLamp)\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Journal}=(Action=PanelJour)\n"+
"IK_{Character}=(Action=PanelChar)\n"+
"IK_{Escape}=(Action=ShowEntryInPanel)\n"+
"IK_{Escape}=(Action=IngameMenu)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Alch}=(Action=PanelAlch)\n"+
"IK_{Map}=(Action=PanelMap)\n"+
"IK_{LeftMouse}=(Action=Finisher)\n"+
"IK_{LeftMouse}=(Action=Finish)\n"+
"IK_{Meditation}=(Action=PanelMeditation)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{Craft}=(Action=PanelCrafting)\n"+
"IK_{FastMenu}=(Action=HubMenu)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Potion1}=(Action=DrinkPotion1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Quest}=(Action=TrackQuest)\n"+
"IK_{Quest}=(Action=HighlightObjective)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_MouseZ=(Action=ToggleSigns)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Surface}=(Action=DiveUp)\n"+
"IK_{CameraLock}=(Action=CameraLock)\n"+
"\n"+
"[ThrowHold]\n"+
"IK_{padSprint}=(Action=Sprint)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Down}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Right}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{SprintToggle}=(Action=SprintToggle)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Left2}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{Left}=(Action=GI_AxisLeftX,State=Axis,Value=-1)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padX}=(Action=GI_AxisLeftX)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{padY}=(Action=GI_AxisLeftY)\n"+
"IK_{Sheathe}=(Action=SwordSheathe)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{Right2}=(Action=GI_AxisLeftX,State=Axis,Value=1)\n"+
"IK_{pad1}=(Action=SteelSword)\n"+
"IK_{pad1}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{pad2}=(Action=SilverSword)\n"+
"IK_{pad2}=(Action=SwordSheathe,State=Duration,IdleTime=0.3)\n"+
"IK_{padJump}=(Action=ThrowCastAbort)\n"+
"IK_{MiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{MiddleMouse}=(Action=ThrowItem)\n"+
"IK_{Jump}=(Action=ThrowCastAbort)\n"+
"IK_{Craft}=(Action=PanelFakeHud)\n"+
"IK_{padX}=(Action=GI_AxisRightX)\n"+
"IK_{padY}=(Action=GI_AxisRightY)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItemHold,State=Duration,IdleTime=0.2)\n"+
"IK_{padMiddleMouse}=(Action=ThrowItem)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Down2}=(Action=GI_AxisLeftY,State=Axis,Value=-1)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Up}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_MouseX=(Action=GI_MouseDampX)\n"+
"IK_MouseY=(Action=GI_MouseDampY)\n"+
"IK_{Sprint}=(Action=Sprint)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{Up2}=(Action=GI_AxisLeftY,State=Axis,Value=1)\n"+
"IK_{1}=(Action=SwordSheatheSteel,State=Duration,IdleTime=0.3)\n"+
"IK_{1}=(Action=SteelSword)\n"+
"IK_{2}=(Action=SwordSheatheSilver,State=Duration,IdleTime=0.3)\n"+
"IK_{2}=(Action=SilverSword)\n"+
"\n"+
"[TutorialPopup]\n"+
"\n"+
"\n"
document.getElementById("download").onclick = function() {
        if (!(download.length <= 0)) {
            var t = new Blob([download], {
                type: "text/plain;charset=utf-8"
            });
            saveAs(t, "input.settings")
        }
    },
    function() {
        $("form").jsonForm({
            schema: {
                1: {
                    title: "Steel Sword",
                    type: "string"
                },
                2: {
                    title: "Silver Sword",
                    type: "string"
                },
                3: {
                    title: "Aard",
                    type: "string"
                },
                4: {
                    title: "Yrden",
                    type: "string"
                },
                5: {
                    title: "Igni",
                    type: "string"
                },
                6: {
                    title: "Quen",
                    type: "string"
                },
                7: {
                    title: "Axii",
                    type: "string"
                },
                Alch: {
                    title: "Alchemy",
                    type: "string"
                },
                Bestiary: {
                    title: "Bestiary",
                    type: "string"
                },
                CameraLock: {
                    title: "CameraLock",
                    type: "string"
                },
                Candle: {
                    title: "Incenerate/Extinguish (rebind for looting)",
                    type: "string"
                },
                CantorGallop: {
                    title: "CanterGallop",
                    type: "string"
                },
                Character: {
                    title: "Character",
                    type: "string"
                },
                Craft: {
                    title: "Craft",
                    type: "string"
                },
                DiveDown: {
                    title: "DiveDown",
                    type: "string"
                },
                Dodge: {
                    title: "Dodge",
                    type: "string"
                },
                Down: {
                    title: "Down",
                    type: "string"
                },
                Down2: {
                    title: "Down2 ",
                    type: "string"
                },
                E: {
                    title: "Interact",
                    type: "string"
                },
                Escape: {
                    title: "Escape",
                    type: "string"
                },
                F1: {
                    title: "Show keys",
                    type: "string"
                },
                FastTravel: {
                    title: "FastTravel (avoid interact with people nearby)",
                    type: "string"
                },
                Focus: {
                    title: "Focus (Dectective Mode)",
                    type: "string"
                },
                Follow: {
                    title: "Follow",
                    type: "string"
                },
                GatherHerbs: {
                    title: "Gather Herbs (Picky Interact)",
                    type: "string"
                },
                Glossary: {
                    title: "Glossary",
                    type: "string"
                },
                Gwint: {
                    title: "Gwint",
                    type: "string"
                },
                Horse: {
                    title: "Horse",
                    type: "string"
                },
                Inv: {
                    title: "Inv",
                    type: "string"
                },
                Journal: {
                    title: "Journal",
                    type: "string"
                },
                Jump: {
                    title: "Jump",
                    type: "string"
                },
                Left: {
                    title: "Left",
                    type: "string"
                },
                Left2: {
                    title: "Left2",
                    type: "string"
                },
                LeftMouse: {
                    title: "LeftMouse",
                    type: "string"
                },
                Map: {
                    title: "Map",
                    type: "string"
                },
                Meditation: {
                    title: "Meditation",
                    type: "string"
                },
                FastMenu: {
                    title: "Menu",
                    type: "string"
                },
                MiddleMouse: {
                    title: "MiddleMouse",
                    type: "string"
                },
                PCALT: {
                    title: "Combat Alternate",
                    type: "string"
                },
                RightMouse: {
                    title: "Parry",
                    type: "string"
                },
                Potion1: {
                    title: "Potion1",
                    type: "string"
                },
                Potion2: {
                    title: "Potion2",
                    type: "string"
                },
                Quest: {
                    title: "Quest",
                    type: "string"
                },
                RadMenu: {
                    title: "Radial Menu (signs and wep wheel)",
                    type: "string"
                },
                Right: {
                    title: "Right",
                    type: "string"
                },
                Right2: {
                    title: "Right2",
                    type: "string"
                },
                Roll: {
                    title: "Roll",
                    type: "string"
                },
                Sheathe: {
                    title: "Sheathe",
                    type: "string"
                },
                Sign: {
                    title: "Sign",
                    type: "string"
                },
                Sprint: {
                    title: "Sprint",
                    type: "string"
                },
                Surface: {
                    title: "Surface",
                    type: "string"
                },
                SprintToggle: {
                    title: "SprintToggle",
                    type: "string"
                },
                Up: {
                    title: "Up",
                    type: "string"
                },
                Up2: {
                    title: "Up2",
                    type: "string"
                },
                WalkToggle: {
                    title: "WalkToggle",
                    type: "string"
                },
				pad1: {
                    title: "Steel Sword",
                    type: "string"
                },
                pad2: {
                    title: "Silver Sword",
                    type: "string"
                },
                padCameraLock: {
                    title: "CameraLock",
                    type: "string"
                },
                padCandle: {
                    title: "Incenerate/Extinguish (rebind for looting)",
                    type: "string"
                },
                padCantorGallop: {
                    title: "CanterGallop",
                    type: "string"
                },
                padDiveDown: {
                    title: "DiveDown",
                    type: "string"
                },
                padDodge: {
                    title: "Dodge",
                    type: "string"
                },
                padE: {
                    title: "Interact",
                    type: "string"
                },
                padEscape: {
                    title: "Escape",
                    type: "string"
                },
                padFastTravel: {
                    title: "FastTravel (avoid interact with people nearby)",
                    type: "string"
                },
                padFocus: {
                    title: "Focus (Dectective Mode)",
                    type: "string"
                },
                padFollow: {
                    title: "Follow",
                    type: "string"
                },
                padGatherHerbs: {
                    title: "Gather Herbs (Picky Interact)",
                    type: "string"
                },
                padHorse: {
                    title: "Horse",
                    type: "string"
                },
                padHeavy: {
                    title: "Heavy attack",
                    type: "string"
                },
                padJump: {
                    title: "Jump",
                    type: "string"
                },
                padLight: {
                    title: "Light attack",
                    type: "string"
                },
                padMap: {
                    title: "Map",
                    type: "string"
                },
                padFastMenu: {
                    title: "Menu",
                    type: "string"
                },
                padMiddleMouse: {
                    title: "Throw",
                    type: "string"
                },
                padRightMouse: {
                    title: "Parry",
                    type: "string"
                },
                padPotion1: {
                    title: "Potion1",
                    type: "string"
                },
                padPotion2: {
                    title: "Potion2",
                    type: "string"
                },
                padQuest: {
                    title: "Quest",
                    type: "string"
                },
                padRadMenu: {
                    title: "Radial Menu (signs and wep wheel)",
                    type: "string"
                },
                padRoll: {
                    title: "Roll",
                    type: "string"
                },
                padSign: {
                    title: "Sign",
                    type: "string"
                },
                padSprint: {
                    title: "Sprint",
                    type: "string"
                },
                padSurface: {
                    title: "Surface",
                    type: "string"
                },
                padX: {
                    title: "X axis (left/right)",
                    type: "string"
                },
                padY: {
                    title: "Y axis (up/down)",
                    type: "string"
                },
            },
            value: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                Alch: "L",
                Bestiary: "B",
                CameraLock: "Z",
                Candle: "E",
                CantorGallop: "LShift",
                Character: "K",
                Craft: "O",
                DiveDown: "C",
                Dodge: "LAlt",
                Down: "Down",
                Down2: "S",
                E: "E",
                FastMenu: "Enter",
                FastTravel: "E",
                Escape: "Escape",
                F1: "F1",
                Focus: "RightMouse",
                Follow: "X",
                GatherHerbs: "E",
                Glossary: "G",
                Gwint: "H",
                Horse: "X",
                Inv: "I",
                Journal: "J",
                Jump: "Space",
                Left: "Left",
                Left2: "A",
                LeftMouse: "LeftMouse",
                Map: "M",
                Meditation: "N",
                MiddleMouse: "MiddleMouse",
                PCALT: "LShift",
                Potion1: "R",
                Potion2: "F",
                Quest: "V",
                RadMenu: "Tab",
                Right: "Right",
                Right2: "D",
                RightMouse: "RightMouse",
                Roll: "Space",
                Sheathe: "C",
                Sign: "Q",
                Sprint: "LShift",
                SprintToggle: "CapsLock",
                Surface: "Space",
                Up: "Up",
                Up2: "W",
                WalkToggle: "LControl",
				pad1: "PAD_DigitLeft",
                pad2: "PAD_DigitRight",
                padCameraLock: "PAD_RightThumb",
                padCandle: "PAD_A_CROSS",
                padCantorGallop: "PAD_A_CROSS",
                padDiveDown: "PAD_X_SQUARE",
                padDodge: "PAD_B_CIRCLE",
                padE: "PAD_A_CROSS",
                padEscape: "PAD_Back_Select",
                padFastTravel: "PAD_A_CROSS",
                padFocus: "PAD_LeftTrigger",
                padFollow: "PAD_A_CROSS",
                padGatherHerbs: "PAD_A_CROSS",
                padGlossary: "PAD_Back_Select",
                padHorse: "PAD_LeftThumb",
                padHeavy: "PAD_Y_TRIANGLE",
                padJump: "PAD_B_CIRCLE",
                padLight: "PAD_X_SQUARE",
                padMap: "PAD_Start",
                padFastMenu: "PAD_Start",
                padMiddleMouse: "PAD_RightShoulder",
                padRightMouse: "PAD_LeftTrigger",
                padPotion1: "PAD_DigitUp",
                padPotion2: "PAD_DigitDown",
                padQuest: "PAD_RightThumb",
                padRadMenu: "PAD_LeftShoulder",
                padRoll: "PAD_B_CIRCLE",
                padSheathe: "PAD_DigitLeft",
                padSign: "PAD_RightTrigger",
                padSprint: "PAD_A_CROSS",
                padSurface: "PAD_B_CIRCLE",
                padX: "PAD_LeftAxisX",
                padY: "PAD_LeftAxisY"
            },
            onSubmit: function(t, e) {
                    $("buffer").html(b);
                    var i = Object.keys(e);
                    for (var n = 0; n < i.length; n++) b = b.replaceAll("{" + i[n] + "}", e[i[n]]);
                    b = b.replaceAll("{.*}", "None"), download = b, $("#buffer").html(b)
            }
        })
    }()
    String.prototype.replaceAll = function(t, e) {
        return void 0 === e ? this.toString() : this.split(t).join(e)
    };